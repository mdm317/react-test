import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Axios from 'axios';
function App() {
  const axiosTest = async()=>{
    const response = await Axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    console.log(response.data.data);
  }
  useEffect(() => {
    axiosTest();
  }, [])
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
    </div>
  );
}

export default App;
