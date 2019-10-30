import React, { Component } from "react";
import ReactDOM from "react-dom";
import AccordionWrapper from "./components/AccordionWrapper";
import "./styles.css";

const GRABGS_SERVER = 'http://3.133.61.166:3000/';
const DEFAULT_LINK_SERVER = 'https://services-staging.allyo.com';
class App extends Component {
  state = {
    linkServer: GRABGS_SERVER,
    grabbedData: []
  };

  fixData = (data) => {
    return data.texts.reduce((p,c,i) => {
      const arr = data.links.filter((obj,j) => {
        return Object.keys(obj)[0]==i;
      });
      p.push({text: c, links: arr})
      return p
    }, [])
  }
  
  async componentDidMount() {
    const res = localStorage.getItem('internalTools') || DEFAULT_LINK_SERVER;
    res && this.setState({ linkServer: res });
    const response = await fetch(`${GRABGS_SERVER}/api/internal_tools`);
    const json = await response.json();
    this.setState({ grabbedData: this.fixData(json) });
    // this.state.grabbedData && console.log(this.fixData(json))
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
        <AccordionWrapper linkServer={DEFAULT_LINK_SERVER} grabbedData={this.state.grabbedData} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
