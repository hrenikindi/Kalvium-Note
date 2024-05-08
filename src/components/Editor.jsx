import React, { Component } from "react";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  renderInput = () => {
    return (
      <div className="input">
        <h3>Input</h3>
        <textarea
          className="input-text"
          onChange={this.handleInputChange}
          value={this.state.inputValue}
        />
      </div>
    );
  };

  renderOutput = () => {
    return (
      <div className="output">
        <h3>Pro Note</h3>
        <div className="output-text">{this.state.inputValue}</div>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        {this.renderInput()}
        {this.renderOutput()}
      </div>
    );
  }
}

export default Editor;
