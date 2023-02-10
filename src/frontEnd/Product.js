import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
function Product() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json =>
                // console.log(json);
                setData(json))
    }, [])
    // console.log(data);
    return (
        <>
            <div id="left-bg">
                <div className="row justify-content-center">
                    <div className="col text-right mb-2">
                        <button id="toggle" className="list-btn px-2 py-2" style={{ cursor: "pointer" }} >List
                            of Category</button>
                    </div>
                    <div className="col mb-2">
                        <button className="brand-btn px-5 py-2 ml-2" id="toggle1" style={{ cursor: "pointer" }}>Brands</button>
                    </div>
                    <div className="col text-lg-left text-center mb-2">
                        <button id="toggle" className="list-btn px-5 py-2">Order History</button>
                    </div>
                </div>
                <div className="row py-3 px-3 mt-4">
                    { data.map((e) => {
                         console.log("e----------",e)
                       return(< div className="col-lg-3 col-md-6 col-12 mb-5" >
                             
                            <div className="border-bg py-3">
                                <div className="text-center px-2">
                                    <img src={e.image} className="img-fluid product-img" alt="" />
                                    
                                </div>
                                <div className="head-name ml-md-2 ml-lg-4 text-md-left text-center">{e.title}</div>
                                <div className="d-flex justify-content-around">
                                    <div className="dis-head">
                                       {e.rating.count}
                                    </div>
                                    <div className="d-flex"> <span className="green-dollar">$ </span>
                                        <div className="price">{e.price}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       )
                        
                    })

                }
                    {/* <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="border-bg py-3">
                    <div className="text-center px-2">
                        <img src="/images/img2.png" className="img-fluid py-3 px-3" alt="" />
                    </div>
                    <div className="head-name ml-md-2 ml-lg-4 text-md-left text-center">Limon</div>
                    <div className="d-flex justify-content-around">
                        <div className="dis-head">71087180</div>
                        <div className="d-flex"> <span className="green-dollar">$ </span>
                            <div className="price">30.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="border-bg py-3">
                    <div className="text-center px-2">
                        <img src="/images/img2.png" className="img-fluid py-3 px-3" alt="" />
                    </div>
                    <div className="head-name ml-md-2 ml-lg-4 text-md-left text-center">Limon</div>
                    <div className="d-flex justify-content-around">
                        <div className="dis-head">71087180</div>
                        <div className="d-flex"> <span className="green-dollar">$ </span>
                            <div className="price">30.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="border-bg py-3">
                    <div className="text-center px-2">
                        <img src="/images/img2.png" className="img-fluid py-3 px-3" alt="" />
                    </div>
                    <div className="head-name ml-md-2 ml-lg-4 text-md-left text-center">Limon</div>
                    <div className="d-flex justify-content-around">
                        <div className="dis-head">71087180</div>
                        <div className="d-flex"> <span className="green-dollar">$ </span>
                            <div className="price">30.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="border-bg py-3">
                    <div className="text-center px-2">
                        <img src="/images/img2.png" className="img-fluid py-3 px-3" alt="" />
                    </div>
                    <div className="head-name ml-md-2 ml-lg-4 text-md-left text-center">Limon</div>
                    <div className="d-flex justify-content-around">
                        <div className="dis-head">71087180</div>
                        <div className="d-flex"> <span className="green-dollar">$ </span>
                            <div className="price">30.00</div>
                        </div>
                    </div>
                </div>
            </div> */}
                </div>
            </div>

        </>

    )
}
export default Product;