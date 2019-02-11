import React, { Component } from 'react';
import './App.scss';
import sfx from './key.mp3';
import environment from './environments/environment.json';

import Header from './components/Header.js';
import CommandLine from './components/CommandLine';

class App extends Component {
  constructor() {
    super();
    this.state = {
      history: [],
      pwd: [],
      scheme: {
        photos: {},
        games: {},
        videos: {}
      }
    };
    new Audio(sfx).play();
    String.prototype.replaceAll = function(search, replacement) {
      const target = this;
      return target.replace(new RegExp(search, 'g'), replacement);
    };
  }
  execute(command) {
    let lines = [];
    this.setState({
      history: [...this.state.history, `[root@jadeallencook]# ${command}`]
    });
    if (command === 'clear') {
      this.setState({
        history: []
      });
    } else if (command === 'pwd') {
      lines = (this.state.pwd.length !== 0) ? this.state.pwd.map(dir => `/${dir}`) : `/`;
    } else if (command === 'ls') {
      lines = [];
    } else if (command === 'help') {
      lines.push(environment.commands.toString().replaceAll(',', ' '));
    } else if (!environment[command]) {
      lines = [
        `${command}: command not found\n`
      ]
    } else {
      if (command === 'bio') {
        lines = [
          null,
          environment[command],
          null
        ]
      } else if (command === 'contact') {
        lines = [
          null,
          `phone: ${environment[command].phone}`,
          `email: ${environment[command].email}`,
          null
        ]
      } else if (command === 'resume') {
        environment[command].map(position => {
          lines = [
            ...lines,
            null,
            position.company,
            position.dates,
            position.description
          ]
        });
        lines = [...lines, null];
      } else if (command === 'social') {
        lines = [null];
        environment[command].map(social => {
          lines = [
            ...lines,
            `<a href="#">https://www.${social}.com/jadeallencook</a>`
          ]
        });
        lines = [...lines, null];
      }
    }
    this.setState({
      history: [...this.state.history, ...lines]
    });
    window.scrollTo(0,document.body.scrollHeight);
  }
  render() {
    return (
      <div className="App">
        <Header commands={environment.commands} />
        {
          this.state.history.map((command, i) => {
            return (<div className="line" key={`command-${i}`}  dangerouslySetInnerHTML={{__html: command}}></div>);
          })
        }
        <CommandLine execute={this.execute.bind(this)} />
      </div>
    );
  }
}

export default App;
