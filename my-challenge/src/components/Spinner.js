function Spinner(props) {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
export default Spinner;