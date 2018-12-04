import React, { Component } from 'react';
import './Output.css';

export default class Output extends Component {
  render() {
      if (this.props.text) {
        return (
            <p className="output-line" dangerouslySetInnerHTML={{__html: this.props.text}}></p>
        );
      } else {
          return (<p><br /></p>);
      }
  }

  constructor() {
      super();
  }
}
