import React from 'react';
import './App.css';
import LatestUpdates from './LatestUpdates'
import CountryLookup from './CountryLookup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          COVID-19 Updates
        </h1>
        <LatestUpdates></LatestUpdates>
      </header>
      <CountryLookup></CountryLookup>
    </div>
  );
}

export default App;
