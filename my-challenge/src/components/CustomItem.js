import React from 'react';
import {Link} from "react-router-dom";

function CustomItem({data}) {

    return (
        <div>
            <div className="col-12 results">
                <div className="pt-4 border-bottom">
                    <Link className="d-block h5 text-dark" to={`/items/${data.id}`} >{data.title}</Link>
                    <label className="page-url text-primary">Autor: {"Juan Peres"}</label>
                    <p className="page-description mt-1 w-75 text-muted">{data.shortDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default CustomItem;