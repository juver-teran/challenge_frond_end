

function Header() {
    return (
        <nav className="navbar sticky-top bg-primary">
            <div className="container-fluid">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <img src={'https://img.icons8.com/color/344/old-vmware-logo.png'} width="50px" height={"50px"} alt="logo" />
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-end">
                    <h5 className="text-white ">Reto</h5>
                </div>
            </div>
        </nav>
    );
}

export default Header;