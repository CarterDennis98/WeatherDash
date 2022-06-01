import React from 'react';
import logo from './logo.svg';
import './App.css';
import esriConfig from "@arcgis/core/config";

export default function App() {
  esriConfig.apiKey = process.env.ESRI_API_KEY as string;
  console.log(process.env.ESRI_API_KEY as string)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}