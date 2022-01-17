import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
