import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './pages/Home'
import Example from './pages/Example'
import { LayoutMain } from './layauts/LayoutMain';

export default class Routes extends Component {
  render() {
    return (
      <>
      <Router>
      <LayoutMain>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/example">
            <Example />
          </Route>
        </Switch>
        </LayoutMain>
      </Router>
      </>
    )
  }
}
