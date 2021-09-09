import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListcontainer/ItemListcontainer';
import Counter from './components/ItemCount/ItemCount'

const App=()=> {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ItemListContainer welcome="bienvenido a mi tienda"/>
      <Counter /> 
    </div>
  );
}

export default App;
