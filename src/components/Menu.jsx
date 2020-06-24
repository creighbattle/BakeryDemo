import React, { Component } from 'react';
import './Menu.css'

//images
import MenuItem1 from '../assets/menu-item-1.jpg';
import MenuItem2 from '../assets/menu-item-2.jpg';
import MenuItem3 from '../assets/menu-item-3.jpg';
import MenuItem4 from '../assets/menu-item-4.jpg';
import MenuItem5 from '../assets/menu-item-5.jpg';
import MenuItem6 from '../assets/menu-item-6.jpg';

class Menu extends Component {
    render() {
        return (
            <div className="menu" id="menu">

                <div className="container">
                    <div className="row text-center text-white">
                        <div className="col-12 col-md-4 mb-4 mb-md-0 mt-4">
                            <div className="shop-info">
                                <i className="far fa-clock mb-3"></i>
                                <h1 className="mb-4">Hours of operation</h1>
                                <p>Mon to Fri: 8:00am - 6:00pm</p>
                                <p>Sat to Sun: 8:00am - 1:00pm</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4 mb-md-0 mt-md-4 mt-md-4">
                            <div className="shop-info">
                                <i className="fas fa-map-marked-alt mb-3"></i>
                                <h1 className="mb-4">Our location</h1>
                                <address>
                                    1234 First Avenue <br />
                                    New York City, NY 1231
                                </address>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-md-0 mt-md-4">
                            <div className="shop-info">
                                <i className="fas fa-mobile-alt mb-3"></i>
                                <h1 className="mb-4">Get in touch</h1>
                                <p>Phone #: (800) 555-5555</p>
                                <p>Email: contact@bakery.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-4" />

                <div className="container-fluid p-0">
                    <div className="section-heading my-5 text-center">
                        <h4 className="text-white newFontSize">Our Tasty Food</h4>
                        <h1 className='display-4 testing'>The Menu</h1>
                    </div>

                    {/* Row #1 */}
                    <div className="row no-gutters">

                        {/* Column #1 */}
                        <div className="col-12 col-sm-6 col-xl-2 order-sm-1 order-xl-1">
                            <img className="img-fluid" src={MenuItem1} alt="" />
                        </div>

                        <div className="col-12 col-sm-6 col-xl-2 order-sm-2 order-xl-2 point-left">
                            <div className="menu-item-des">
                                <h6>$10</h6>
                                <h1>The Cake</h1>
                                <p>This cake is amazing! I recommend it to everyone</p>
                                <a href="#" className="btn mt-3 d-none d-xl-block">Learn more</a>
                            </div>
                        </div>

                        {/* Column #2 */}
                        <div className="col-12 col-sm-6 col-xl-2 order-sm-4 order-xl-3">
                            <img className="img-fluid" src={MenuItem2} alt="" />
                        </div>

                        <div className="col-12 col-sm-6 col-xl-2 order-sm-3 order-xl-4 point-left">
                            <div className="menu-item-des">
                                <h6>$10</h6>
                                <h1>The Cake</h1>
                                <p>This cake is amazing! I recommend it to everyone</p>
                                <a href="#" className="btn mt-3 d-none d-xl-block">Learn more</a>
                            </div>
                        </div>

                        {/* Column #3 */}
                        <div className="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-5">
                            <img className="img-fluid" src={MenuItem3} alt="" />
                        </div>

                        <div className="col-12 col-sm-6 col-xl-2 order-sm-6 order-xl-6 point-left">
                            <div className="menu-item-des">
                                <h6>$10</h6>
                                <h1>The Cake</h1>
                                <p>This cake is amazing! I recommend it to everyone</p>
                                <a href="#" className="btn mt-3 d-none d-xl-block">Learn more</a>
                            </div>
                        </div>

                    </div>

                    {/* Row #2 */}
                    <div className="row no-gutters">

                        {/* Column #4 */}
                        <div className="col-12 col-sm-6 col-xl-2 order-sm-2 order-xl-2">
                            <img className="img-fluid" src={MenuItem4} alt="" />
                        </div>

                        <div className="col-12 col-sm-6 col-xl-2 order-sm-1 order-xl-1 point-right">
                            <div className="menu-item-des">
                                <h6>$10</h6>
                                <h1>The Cake</h1>
                                <p>This cake is amazing! I recommend it to everyone</p>
                                <a href="#" className="btn mt-3 d-none d-xl-block">Learn more</a>
                            </div>
                        </div>

                        {/* Column #5 */}
                        <div className="col-12 col-sm-6 col-xl-2 order-sm-3 order-xl-4">
                            <img className="img-fluid" src={MenuItem5} alt="" />
                        </div>

                        <div className="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-3 point-right">
                            <div className="menu-item-des">
                                <h6>$10</h6>
                                <h1>The Cake</h1>
                                <p>This cake is amazing! I recommend it to everyone</p>
                                <a href="#" className="btn mt-3 d-none d-xl-block">Learn more</a>
                            </div>
                        </div>

                        {/* Column #6 */}
                        <div className="col-12 col-sm-6 col-xl-2 order-sm-6 order-xl-6">
                            <img className="img-fluid" src={MenuItem6} alt="" />
                        </div>

                        <div className="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-5 point-right">
                            <div className="menu-item-des">
                                <h6>$10</h6>
                                <h1>The Cake</h1>
                                <p>This cake is amazing! I recommend it to everyone</p>
                                <a href="#" className="btn mt-3 d-none d-xl-block">Learn more</a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Menu;