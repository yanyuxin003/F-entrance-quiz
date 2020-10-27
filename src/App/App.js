import React, { Component } from 'react';
import './App.scss';
import Home from './components/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
