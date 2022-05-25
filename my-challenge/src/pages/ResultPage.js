import React, {useEffect, useState} from 'react';
import ResultContainer from "../components/ResultContainer";
import Footer from "../components/Footer";
import {useSearchParams} from "react-router-dom";
import {repositorySearch} from "../services/repositorySearch";
import Spinner from '../components/Spinner';

function ResultPage() {
    const {getResultsByFilter} = repositorySearch();

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    let [searchParams] = useSearchParams();
    let filter = searchParams.get("search");
    
    const getResults = async () => {
        try {
            setLoading(true)
            const response = await getResultsByFilter(filter);
            setResults(response);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getResults()
        return () => {
            setLoading(false);
        }
    },[]);

    if (loading)
        return <Spinner/>
    return (
        <div>
            {!loading && results.length ? (
                    <ResultContainer results={results}/>
                ) :
                (
                    <div className="alert alert-danger" role="alert">
                        <h3>No se encontraron resultados para <strong>{filter}</strong></h3>
                    </div>
                )
            }
        </div>
    );
}

export default ResultPage;