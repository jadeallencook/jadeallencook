import React, { Component } from 'react';
import './App.css';
import CommandLine from './components/command-line/CommandLine';
import Output from './components/output/Output';
var outputs = require('./data/command-outputs');

class App extends Component {

  initLoadScreens = [
    '<img class="logo" src="./assets/images/logo.png" />',
    '<b>Web Terminal</b> v1.0.0',
    '<i>Built with React & NPM</i>'
  ];

  commands = {
    bio: () => {
      this.addOutput(outputs.bio);
    },
    clear: () => {
      this.setState({history: []});
      this.commands.help();
    },
    contact: () => {
      this.addOutput(outputs.contact);
    },
    ls: () => {
      this.addOutput(outputs.ls);
    },
    pwd: () => {
      this.addOutput(outputs.ls);
    },
    help: () => {
      this.addOutput(outputs.help);
    },
    social: () => {
      this.addOutput(outputs.social);
    },
    resume: () => {
      this.addOutput(outputs.resume);
    },
  };

  render() {
    return (
      <div className="App">
        {this.state.history}
        <CommandLine hide={this.state.hide} command={this.state.command} indicator={true} key="current" />
      </div>
    );
  }

  addOutput(html) {
    this.setState(previousState => ({
      history: [...previousState.history, <Output text={html} key={new Date().getTime()} />],
    }));
  }

  runCommand(cmd) {
    this.setState(previousState => ({
      history: [...previousState.history, <CommandLine command={cmd} indicator={false} key={new Date().getTime()} />],
      command: ''
    }));
    if (!this.commands[cmd]) this.commands.help();
    else this.commands[cmd]();
    this.setState({hide: false});
    window.scrollTo(0, document.body.scrollHeight);
  }

  constructor() {
    super();
    outputs = outputs.default;
    this.state = {
      command: '',
      history: [],
      hide: true
    };
    window.addEventListener('keydown', event => {
      const key = event.key.toLowerCase();
      let string = this.state.command;
      if (key === 'backspace') {
        string = string.substr(0, string.length - 1);
        this.setState({
          command: string
        });
      } else if (key === 'enter') {
        this.setState({
          hide: true
        });
        this.runCommand(string);
      } else if (key.length === 1) {
        string += key;
        this.setState({
          command: string
        });
      }
    });
  }

  componentDidMount() {
    let currentLine = 0;
    const loading = setInterval(() => {
      this.addOutput(this.initLoadScreens[currentLine]);
      currentLine++;
      if (currentLine === this.initLoadScreens.length) {
        this.commands.help();
        clearInterval(loading);
        this.setState({ hide: false });
      }
    }, 300);
  }

}

export default App;
