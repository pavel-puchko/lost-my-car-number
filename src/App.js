import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import NumberDetails from './components/numbers/NumberDetails'
import FoundNumber from './components/numbers/FoundNumber'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Home} />
            <Route path='/number/:id' component={NumberDetails} />
            <Route path='/foundNumber' component={FoundNumber} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
