import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './components/Home'
import Example from './components/Example'
import { LayautMain } from './layauts/LayautMain';

export default class Routes extends Component {
  render() {
    return (
      <>
      <Router>
      <LayautMain>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/example">
            <Example />
          </Route>
        </Switch>
        </LayautMain>
      </Router>
      </>
    )
  }
}
