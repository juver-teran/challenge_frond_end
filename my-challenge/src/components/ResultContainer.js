import React from 'react';
import {ListGroup} from 'react-bootstrap'
import CustomItem from './CustomItem';

function ResultContainer({results}) {
    return (
        <div>
            <ListGroup>
                {results.map((item) => <CustomItem key={item.id} data={item}/>)}
            </ListGroup>
        </div>
    );
}

export default ResultContainer;