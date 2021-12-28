import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primera tienda
        </p>
        <a
          className="App-link"
          href="https://moveitcba.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Move it
        </a>
      </header>
    </div>
  );
}

export default App;
