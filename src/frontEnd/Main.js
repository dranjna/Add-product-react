import React from "react";
import Cart from "../cart";
import Product from "./Product";
import Navbar from "../Navbar";
function Main(){
    return(<>
        <Navbar />
        <div className="container-fluid">
            
            <div className="row">
                <div className="col-md-6 col-lg-8 py-3 px-2">
                    <Product />
                </div>
                <div className="col-md-6 col-lg-4 py-3 px-3">
                    <Cart />
                </div>
            </div>
        </div>
        </>
    )
}
export default Main;