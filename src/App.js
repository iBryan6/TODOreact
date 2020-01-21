import React, { Component } from "react";
import Input from "./components/input";
import List from "./components/list";
class App extends Component {
  state = {
    list: [],
    check: false
  };

  addItem = item => {
    this.setState({
      list: [...this.state.list, item]
    });
  };

  handleDelete = id => {
    this.setState({
      list: this.state.list.filter(list => list.id !== id)
    })
  };

  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <Input onSubmit={this.addItem} />
        <ul>
          {this.state.list.map(list => (
            <List
              key={list.id}
              text={list.text}
              handleDelete={() => this.handleDelete(list.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
