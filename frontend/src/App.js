import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productsInCart: [],
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact> <Home addCartList={ this.addCartList } /></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
