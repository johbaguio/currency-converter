import React from 'react';
import './style.css';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="header">Currency 💰 Converter</h1>
            </React.Fragment>
        )
    }
}

export default Header;