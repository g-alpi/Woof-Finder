import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import home from './home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' Component={App}/>
        <Route exact path='/home' Component={home}/>
      </Switch>
    </Router>
  </React.StrictMode>,
)
