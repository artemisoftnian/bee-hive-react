import React from 'react';

import logo from '../../logo.png';
import '../../App.css';

import { Link } from 'react-router-dom'

function Home() {
  return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Welcome to the Hive!
          </p>

          <Link to="/login">Please Login</Link>  - OR - <Link to="/signup"> Create a new account</Link>      


        </header>
  );
}

export default Home;
