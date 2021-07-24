import { Link } from 'react-router-dom'

export default function NewMessage() {
  return (
        <header className="App-header">
          <p>
            New Message Page!
          </p>

          <Link to="/login">Please Login</Link>  - OR - <Link to="/signup"> Create a new account</Link>     
        </header>
  );
}