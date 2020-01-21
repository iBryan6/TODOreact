import React, { Component } from "react";
import shortid from 'shortid';

class input extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlesubmit = event => {
    
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text
    });
    this.setState({
      text:""
    })
  };

  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <input
          name="text"
          placeholder="Escriba aqui..."
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type="submit">+</button>
        <hr />
      </form>
    );
  }
}

export default input;
