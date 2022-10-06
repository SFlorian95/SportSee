import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route>
                <Error/>
            </Route>
        </Switch>
    </Router>
)
