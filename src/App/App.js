import React, { Component } from 'react';
import './App.scss';
// TODO GTB-知识点: - 我们这个quiz可以暂时不用引用Router, 如果要引入的话，那页面文件不应该放在/components目录下，应该放在src/pages/下
import Home from './components/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// TODO GTB-工程实践: - 有eslint的问题

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
