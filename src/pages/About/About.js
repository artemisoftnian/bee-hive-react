import logo from '../../logo.png';
import Footer from '../../theme/layouts/Footer'
import '../../App.css';

import { Link } from 'react-router-dom'

export default function About() {
  return (
        <header className="App-header">
          <p style={{marginBottom:30, fontSize:25}}>Welcome to the Hive!</p>

          <img src={logo} className="App-logo" alt="logo" />          

          <Link to="/profile"> Please, Go back to your profile!</Link>
          <Footer />
        </header>
  );
}