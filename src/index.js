import React, { Component } from "react";
import ReactDOM from "react-dom";
import AccordionWrapper from "./components/AccordionWrapper";
import "./styles.css";

const GRABGS_SERVER = 'http://localhost:3003'
class App extends Component {
  state = {
    linkServer: GRABGS_SERVER,
    grabbedData: []
  };
  
  async componentDidMount() {
    const res = localStorage.getItem('internalTools') || GRABGS_SERVER;
    res && this.setState({ linkServer: res });
    const response = await fetch(`${GRABGS_SERVER}/api/internal_tools`);
    const json = await response.json();
    this.setState({ grabbedData: json });
  }

  componentWillMount() {
    // localStorage.setItem('internalTools', JSON.stringify(linkServer)); // for the list
    localStorage.setItem('internalTools', this.state.linkServer); // for the list
  }

  updateInputValue = (e) => {
    this.setState({ linkServer: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>Internal Tools</h1>
        <input onChange={this.updateInputValue} defaultValue={this.state.linkServer} />
        <AccordionWrapper linkServer={this.state.linkServer} texts={this.state.grabbedData.texts} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
