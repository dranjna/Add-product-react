import React from "react";
import { Button } from "react-bootstrap";
function Cart(){
    return(<>
    <div  id="right-side">
                <div className=" d-flex justify-content-center align-items-center">
                    <div className="col-md-9 col-7">
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" id="dropdownMenubutton" data-toggle="dropdown"
                                aria-expanded="false">
                                <span className="ml-2">Walk in Customer</span>
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenubutton">
                                <li><a className="dropdown-item" href="#">Australia</a></li>
                                <li><a className="dropdown-item" href="#">India</a></li>
                                <li><a className="dropdown-item" href="#">United States</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-5 text-right">
                        <button className="add-btn px-2 pb-1">+</button>
                    </div>
                </div>
                <div className="row mt-4 px-4">
                    <div className="col-3">
                        <h1>Product</h1>
                    </div>
                    <div className="col-3">
                        <h1>Price</h1>
                    </div>
                    <div className="col-3">
                        <h1>Quantity</h1>
                    </div>
                    <div className="col-3">
                        <h1>Subtotal</h1>
                    </div>
                </div>
                <div className="row mt-2 mx-3 py-1 td-bg">
                    <div className="col-3 pt-1">
                        <h2>Avocado</h2>
                        <div className="d-flex">
                            <h6>71087180</h6> <a href="" className="ml-2 mt-0"><img src="/images/link.png"
                                    className="img-fluid mb-2" alt=""/></a>
                        </div>
                    </div>
                    <div className=" col-2 mt-3 text-center d-flex">
                        <span className="dollar">$ </span>
                        <div className="price">15.00</div>
                    </div>
                    <div className=" col-4 mt-2  text-center">
                        <div className="cart-bg py-1"><button className="minus-btn">-</button><span className="mx-2">2</span><button
                                className="plus-btn">+</button></div>
                    </div>
                    <div className="col-3 mt-3  text-center d-flex">
                        <span className="green-dollar">$ </span>
                        <div className="sub-total">30.00</div>
                    </div>
                    <div className="cross-btn px-1"><img src="/images/cross.png" className="img-fluid" alt=""/></div>
                </div>
                <div className="row mt-3 mx-3 py-1 td-bg">
                    <div className="col-3 pt-1">
                        <h2>Limon</h2>
                        <div className="d-flex">
                            <h6>71087180</h6> <a href="" className="ml-2 mt-0"><img src="/images/link.png"
                                    className="img-fluid mb-2" alt=""/></a>
                        </div>
                    </div>
                    <div className=" col-2 mt-3 text-center d-flex">
                        <span className="dollar">$ </span>
                        <div className="price">15.00</div>
                    </div>
                    <div className="col-4 mt-2  text-center">
                        <div className="cart-bg py-1"><button className="minus-btn">-</button><span className="mx-2">2</span><button
                                className="plus-btn">+</button></div>
                    </div>
                    <div className="col-3 mt-3  text-center d-flex">
                        <span className="green-dollar">$ </span>
                        <div className="sub-total">30.00</div>
                    </div>
                    <div className="cross-btn px-1"><img src="/images/cross.png" className="img-fluid" alt=""/></div>
                </div>
                <div className="row mt-3 mx-3 py-1 td-bg">
                    <div className="col-3 pt-1">
                        <h2>Airpods Pro</h2>
                        <div className="d-flex">
                            <h6>71087180</h6> <a href="" className="ml-2 mt-0"><img src="/images/link.png"
                                    className="img-fluid mb-2" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-2 mt-3 text-center d-flex">
                        <span className="dollar">$ </span>
                        <div className="price">15.00</div>
                    </div>
                    <div className="col-4 mt-2  text-center">
                        <div className="cart-bg py-1"><button className="minus-btn">-</button><span className="mx-2">2</span><button
                                className="plus-btn">+</button></div>
                    </div>
                    <div className="col-3 mt-3  text-center d-flex">
                        <span className="green-dollar">$ </span>
                        <div className="sub-total">30.00</div>
                    </div>
                    <div className="cross-btn px-1"><img src="/images/cross.png" className="img-fluid" alt=""/></div>
                </div>

                <div className=" mt-3 mx-3 py-1 td-bg  py-3">
                    <div className="row justify-content-end mr-2">
                        <div className="apply-coupon d-flex justify-content-end py-1 px-2 mr-2 rounded">
                            <img src="/images/tag.png" className="img-fluid" alt=""/>
                            <div className="apply pl-2">Apply Coupon</div>
                        </div>
                    </div>
                    <div className="total-payable row justify-content-center mt-3 pay-border mx-4">
                        <div className="d-flex  py-2 px-lg-5">
                            <div className="pay">Total Payable :</div>
                            <div className="d-flex ml-2"> <span className="green-dollar1">$ </span>
                                <div className="payable-amount">90.00</div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="input-container ">
                    <div className="row ">
                        <div className="col-4 "><label htmlFor="">Tax</label>
                            <input type="text" name="email" id="tax-box" placeholder="" className="w-100" />
                            <i>%</i>
                        </div>
                        <div className="col-4"><label htmlFor="">Discount</label>
                            <input type="text" className="icon-dollar w-100" value placeholder="" />
                            <i>$</i>
                        </div>
                        <div className="col-4"><label htmlFor="">Shipping</label>
                            <input type="text" className="icon-dollar w-100" value placeholder="" />
                            <i>$</i>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-6"><button className="reset-btn rounded ">Reset</button></div>
                        <div className="col-6"> <button className="hold-btn rounded ml-3">Hold</button></div>

                    </div>
                    <div className="row justify-content-center mt-3">
                        <button type="button" className="play-btn rounded" data-toggle="modal" data-target="#exampleModal"
                            data-whatever="@mdo">Pay Now</button>

                    </div>
                </div>
            </div>
    </>)
}
export default Cart;