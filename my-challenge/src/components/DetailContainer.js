
function DetailContainer({data}) {

    return (
        <div className='mt-5'>
            <div className="col-sm-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="d-sm-flex flex-row">
                            <div className='p-2'>
                                <img src={data.url} width={300} height ={200} className="img-lg rounded" alt="profile icon" />
                            </div>
                            <div className="p-2">
                                <h6 className="text-info">{data.title}</h6>
                                <p className="text-muted">Autor: {data.author}</p>
                                <p className="font-weight-bold pt-0">{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default DetailContainer;