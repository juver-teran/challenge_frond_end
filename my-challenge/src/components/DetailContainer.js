import { Col, Row, Nav, Tabs, Tab } from 'react-bootstrap';

function DetailContainer({data}) {

    return (
        <div className='mt-5'>
            <div className="col-sm-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="d-sm-flex flex-row">
                            <div className='p-2'>
                                <img src={data.img} width={200} height ={200} className="img-lg rounded" alt="profile icon" />
                            </div>
                            <div className="p-2">
                                <h6 className="text-dark">{data.title}</h6>
                                <p className="text-muted">Autor: Juver</p>
                                <p className="text-success font-weight-bold pt-0">{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default DetailContainer;