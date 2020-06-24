import React, { Component } from 'react';
import './AboutPage.css';

//images
import AboutImg from '../assets/about-img.jpg';

class AboutPage extends Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="container">
                    <div className="row align-items-lg-center">
                        <div className="col-12 col-md-6 text-center text-md-left">
                            <div className="section-heading mb-3">
                                <h4>Discover</h4>
                                <h1 className="display-4">Our Story</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quod ut beatae accusantium, sunt nulla omnis natus totam molestiae blanditiis numquam deleniti expedita iste non, suscipit sint voluptate odit ea.</p>
                            <a className="btn mt-4 mb-5 mb-md-0" href="#">Find out more</a>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <img className="img-fluid" src={AboutImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;