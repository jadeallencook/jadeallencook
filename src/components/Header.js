import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src="assets/logo.png" alt="Jade Allen Cook Signature" />
                <div>Digital Artist & Web Developer</div>
                <div>This is an interactive website...</div>
                <br />
                <div>available commands: {this.props.commands.map(command => {
                    return command + ' '
                })}</div>
                <br />
            </div>
        )
    }
}

export default Header;