import React, { Component } from "react";
import "./App.css";

class Form extends Component {
  state = {
    title: "",
    globalTitle: "",
    updated: false
  };

  componentDidMount() {
    console.log("Rendered Form");
  }

  componentDidUpdate() {
    if (this.state.updated) {
      console.log("Updated");
      this.setState({ updated: false });
    }
  }

  clickHandler = () => {
    this.setState({
      globalTitle: `My form - ${this.state.title}`,
      updated: true
    });
  };

  inputChange = event => {
    const title = event.target.value;
    this.setState({ title });
  };

  submitForm = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>{this.state.globalTitle}</h1>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="title"
            onChange={this.inputChange}
            // value={this.state.title}
          />
          <button onClick={this.clickHandler}>Click me</button>
        </form>
      </div>
    );
  }
}

export default Form;
