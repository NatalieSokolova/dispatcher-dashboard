import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [testApiRes, setTestApiRes] = useState(null);

  const testApiCall = () => {
    fetch("http://localhost:3001/testAPI")
      .then((res) => res.text())
      .then((res) => setTestApiRes(res));
  };

  useEffect(() => {
    testApiCall();
  }, [testApiRes]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>SUCCESS! YOUR API DATA IS: {testApiRes}</div>
    </div>
  );
}

export default App;
