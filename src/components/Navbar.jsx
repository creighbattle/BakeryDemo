import React, { Component } from 'react';
import Logo1 from '../assets/logo1.png';
import './Navbar.css';
import ScrollIntoView from 'react-scroll-into-view';

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
    }

    hamburger() {
        if (this.state.clicked === false) {
            let toggle = document.getElementById('toggleBar')
            let toggle1 = document.getElementById('toggleTimes')
            let navList = document.getElementById('navlist')
            navList.className = "nav-list nav-list-open text-center p-0"
            toggle.className = "goodbye"
            toggle1.className = "fas fa-times toggle hello"
            this.setState({
                clicked: true
            })
        } else {
            let toggle = document.getElementById('toggleBar')
            let toggle1 = document.getElementById('toggleTimes')
            let navList = document.getElementById('navlist')
            navList.className = "nav-list text-center p-0"
            toggle.className = " fas fa-bars toggle hello"
            toggle1.className = "goodbye"
            this.setState({
                clicked: false
            })
        }

    }


    closeNav() {
        let toggle = document.getElementById('toggleBar')
        let toggle1 = document.getElementById('toggleTimes')
        let navList = document.getElementById('navlist')
        navList.className = "nav-list text-center p-0"
        toggle.className = " fas fa-bars toggle hello"
        toggle1.className = "goodbye"
        this.setState({
            clicked: false
        })
    }

    render() {
        return (
            <header id="home" className="header">
                <div className="container">

                    <div className="hamburger-menu" onClick={() => this.hamburger()}>
                        <i className="fas fa-bars toggle" id="toggleBar"></i>
                        <i className="fas fa-times toggle goodbye" id="toggleTimes"></i>
                    </div>
                    <nav className="d-flex align-items-center justify-content-center justify-content-between">
                        <a className="navbar-brand" href="HomePage.jsx">
                            <img className="img-fluid" src={Logo1} alt="" />
                        </a>
                        <ul className="nav-list text-center p-0" id="navlist">
                            <li className="nav-item">
                                <ScrollIntoView selector="#home">
                                    <a className="nav-link" onClick={() => this.closeNav()}>Home</a>
                                </ScrollIntoView>
                            </li>
                            <li className="nav-item">
                                <ScrollIntoView selector="#about">
                                    <a className="nav-link" onClick={() => this.closeNav()}>About</a>
                                </ScrollIntoView>
                            </li>
                            <li className="nav-item">
                                <ScrollIntoView selector="#menu">
                                    <a className="nav-link" onClick={() => this.closeNav()}>Menu</a>
                                </ScrollIntoView>
                            </li>
                            <li className="nav-item">
                                <ScrollIntoView selector="#chef">
                                    <a className="nav-link" onClick={() => this.closeNav()}>Our Team</a>
                                </ScrollIntoView>
                            </li>
                        </ul>
                    </nav>
                    <div className="hero-text w-100 text-white px-2 px-sm-0">
                        <h1 className="display-4">Welcome</h1>
                        <p className="lead mb-4">Baked goods like you've never seen before!</p>
                        <a className="btn px-5 mr-2" href="#">Explore</a>
                        <a className="btn px-5 ml-2" href="#">Find a store</a>
                    </div>

                </div>
            </header>
        );
    }
}

export default Navbar;