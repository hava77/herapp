import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCount/ItemCount';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar/>
         </header>
         <Switch>
           <Route exact path="/items">
            <ItemListContainer/> 
           </Route>
           <Route path="/category/:name">
            <ItemListContainer/> 
           </Route>
           <Route path="/item/:id">
            <ItemDetailContainer/> 
           </Route>  
        <Counter />
         </Switch>   
      </BrowserRouter>  
    </div>
  );
}

export default App;
