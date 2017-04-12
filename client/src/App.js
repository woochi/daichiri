import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Search';
import Results from './Results';
import Article from './Article';
import AppBar from './AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="App-content">
                <Search/>
              </div>
            </Route>
            <Route>
              <div>
                <div className="App-header">
                  <AppBar/>
                </div>
                <div className="App-content">
                  <Switch>
                    <Route path="/search/:search" component={Results}/>
                    <Route path="/articles/:article" component={Article}/>
                  </Switch>
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
