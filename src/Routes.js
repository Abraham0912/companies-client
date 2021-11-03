import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './pages/Home'
import Example from './pages/Example'
import { LayoutMain } from './layauts/LayoutMain';
import Edit from './pages/Edit';

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

          <Route exact path="/empresas/:id/edit">
            <Edit />
          </Route>
        </Switch>
        </LayoutMain>
      </Router>
      </>
    )
  }
}
