import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import MainDisplay from './components/MainDisplay';
import ShowCart from './components/ShowCart';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><MainPage/></Route>
          <Route path="/detail/:id"><MainPage/></Route>
          <Route path="/cart"><ShowCart/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
