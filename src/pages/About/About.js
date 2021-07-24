import logo from '../../logo.png';
import '../../App.css';

import { Link } from 'react-router-dom'

export default function About() {
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