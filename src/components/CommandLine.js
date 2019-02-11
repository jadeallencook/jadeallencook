import React, { Component } from 'react';
import './CommandLine.scss';

class CommandLine extends Component {
    constructor() {
        super();
        this.state = {
            command: ''
        }
        document.addEventListener('keydown', event => {
            const key = event.key;
            let string = this.state.command;
            if (key === 'Backspace') {
                string = string.substring(0, string.length - 1);
                this.setState({
                    command: string
                });
            } else if (key === 'Enter') {
              this.props.execute(string);
              this.setState({
                  command: ''
              });
            } else if (key.length === 1) {
                string += key;
                this.setState({
                    command: string
                });
            }
        })
    }
    render() {
        return (
            <div className="CommandLine">
                <span>[root@jadeallencook]#</span>
                <input type="text" value={this.state.command + '_'} readOnly />
            </div>
        )
    }
}

export default CommandLine;