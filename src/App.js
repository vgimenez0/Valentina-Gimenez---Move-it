import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';

let ContenedorLista = $("#contenedorLista");
const mostrarItems = new Promise ((resolve, reject) => {
  setTimeout( () => {
    resolve(<ItemList></ItemList>)
  },2000)
})
function App() {
  return (
    <div className="App">
      <header><NavBar/></header>
      <body>
        <div class = "m-3" id="contenedorLista">
          <p>Remera Nike</p>
          {mostrarItems.then(result => ContenedorLista.createElement("ItemList"))}
        </div>
      </body>
    </div>
  );
}

export default App;
