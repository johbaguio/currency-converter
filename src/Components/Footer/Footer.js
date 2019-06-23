import React, { Component } from "react";
import './style.css';
import logo from '../../Images/subit-logo.png';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <img className='logo' src={logo} alt='Subit logo' />
                <h4> © 2019 JOHANNA BAGUIO </h4>
            </div>
        )
    }
}

export default Footer;