/**
 * @file Entry point of the app, manage router and
 * launch or not mocked api in function of react app environment variable
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Error from './components/Error'
import mockedApi from './utils/mirage'

console.log('NODE_ENV: ', process.env.NODE_ENV)
console.log('REACT_APP_ENVIRONMENT: ', process.env.REACT_APP_ENVIRONMENT)

if (process.env.REACT_APP_ENVIRONMENT === 'mockedApi') {
  mockedApi()
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  </Router>
)
