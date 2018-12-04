import React, { Component } from 'react';

export default class CommandLine extends Component {
  render() {
    const indicatorClass = (this.props.indicator) ? 'indicator' : null;
    if (!this.props.hide) {
        return (
            <p>
                <span className="green">root@jadeallencook$ </span>
                <span>{ this.props.command }</span>
                <span className={indicatorClass}></span>
            </p>
        );
    } else {
        return (
            <p>
                <span className={indicatorClass}></span>
            </p>
        );
    }
  }

  constructor() {
      super();
  }
}
