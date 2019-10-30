import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AccordionWrapper from "./components/AccordionWrapper";
import axios from 'axios';
import "./styles.css";

const GRABGS_SERVER = 'http://localhost:3003'

const App = () => {
  const [linkServer, setLinkServer] = useState('https://services-staging.allyo.com');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await axios(`${GRABGS_SERVER}/api/internal_tools`);
    return await res.json(); // (Or whatever)
  }

  useEffect(() => {
    const res = localStorage.getItem('internalTools');
    res && setLinkServer(res);
    console.log(data);
    !data && (async () => {
      try {
        setData(await fetchData());
      } catch (e) {
        //...handle the error...
      }
    })();
  }, []);

  useEffect(() => () => {
    // localStorage.setItem('internalTools', JSON.stringify(linkServer)); // for the list
    localStorage.setItem('internalTools', linkServer); // for the list
  }, []);

  useEffect(() => {
    localStorage.setItem('internalTools', linkServer);
  }, [linkServer]);

  const updateInputValue = (e) => {
    setLinkServer(e.target.value)
  }

  return (
    <div className="App">
      <h1>Internal Tools</h1>
      <input onChange={updateInputValue} defaultValue={linkServer} />
      <AccordionWrapper linkServer={linkServer} data={data}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
