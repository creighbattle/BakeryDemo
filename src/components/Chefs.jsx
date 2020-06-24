import React, { Component } from 'react';
import './Chefs.css';
import Chef1 from '../assets/chef-1.png'
import Chef2 from '../assets/chef-2.png'
import Chef3 from '../assets/chef-3.png'

class Chefs extends Component {
    render() {
        return (
            <div className="chef" id="chef">
                <div className="container">
                    <div className="section-heading my-5 text-center">
                        <h4>Meet</h4>
                        <h1 className="display-4">Our Chefs</h1>
                    </div>

                    <div className="row text-center">
                        <div className="col-12 col-md-4">
                            <img className="img-fluid" src={Chef1} alt=""/>
                            <div className="card-body">
                                <h1>Olivia Logan</h1>
                                <h6>Cupcake Specialist</h6>
                                <p>Olivia is an awesome pastry Chef!</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <img className="img-fluid" src={Chef2} alt=""/>
                            <div className="card-body">
                                <h1>Jessica Lewis</h1>
                                <h6>Lead Baker</h6>
                                <p>Jessica is an awesome pastry Chef!</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <img className="img-fluid" src={Chef3} alt=""/>
                            <div className="card-body">
                                <h1>James Holt</h1>
                                <h6>Cake Specialist</h6>
                                <p>James is an awesome pastry Chef!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chefs;