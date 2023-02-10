import React from "react";
function Navbar(){
    
    return(<>
    <div className="container-fluid bg-white">
        <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="#"><img src="/images/logo (1).png" className="img-fluid" alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse row" id="navbarSupportedContent">
                <div className="col-md-7 d-flex justify-content-center">
                    <div className="form-group has-search mx-md-5 mb-md-0 mb-2">
                        <input type="text" className="form-control" placeholder="Scan/Search Product by Code Or Name" />
                        <img src="/images/search.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="d-flex">
                        <img src="./assets/images/profile-pic.png" className="img-fluid h-50" alt="" />
                        <div className="py-1">
                            <div className="name px-2">Welcome, Jobby!</div>
                            <div className="detail px-2">Cashier on <span>Anythinginstantly</span></div>
                        </div>
                        <div className=" bell">
                            <img src="/images/bell.png" className="img-fluid mt-3 ml-lg-5" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    </div>
    </>)
}
export default Navbar;