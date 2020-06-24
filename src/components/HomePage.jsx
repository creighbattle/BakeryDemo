import React, { Component } from 'react';
// import { Container, Row, Col, Navbar, Nav, NavDropdown, Image, Button, Jumbotron } from 'react-bootstrap';
import './HomePage.css';
import Navbar from './Navbar';
import AboutPage from './AboutPage';
import Menu from './Menu';
import Chefs from './Chefs';
import Footer from './Footer';

class HomePage extends Component {
    render() {
        return (
            <div>

                <Navbar/>
                <AboutPage/>
                <Menu/>
                <Chefs/>
                <Footer/>

            </div>
        );
    }
}

export default HomePage;