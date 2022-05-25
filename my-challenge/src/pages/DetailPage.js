import React, {useEffect, useState} from 'react';
import DetailContainer from "../components/DetailContainer";
import {useParams} from "react-router-dom";
import {repositorySearch} from "../services/repositorySearch";
import Spinner from '../components/Spinner';

function DetailPage(props) {
    let params = useParams();
    const {getResultById} = repositorySearch()

    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState(undefined);

    const getDetail = async () => {
        try {
            setLoading(true)
            const response = await getResultById(params.id);
            setDetail(response);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getDetail()

        return () => {
            setLoading(false)
        }
    }, [])

    if (loading) {
        return <Spinner/>
    }
    return (
        <div className="container">
            {!detail && <div>Contenido no encontrado</div>}
            {detail && <DetailContainer data={detail}/>}
        </div>
    );
}

export default DetailPage;