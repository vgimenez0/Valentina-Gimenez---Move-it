import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
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
