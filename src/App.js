import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header><NavBar/></header>
      <body>
        <div class = "m-3">
          <p>Remera Nike</p>
          <ItemCount stock = "5" initial = "1"></ItemCount>
          <ItemListContainer></ItemListContainer>
        </div>
      </body>
    </div>
  );
}

export default App;
