import logo from './logo.svg';
import './App.css';
// import listaContactos from './componentes/container/contactos_Lista'
import ListaContactos from './componentes/container/contactos_Lista';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ListaContactos></ListaContactos>
      </header>
    </div>
  );
}

export default App;
