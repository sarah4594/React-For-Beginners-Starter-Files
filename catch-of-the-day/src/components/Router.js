import React from 'react'
import App from './App'
import NotFound from './NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StorePicker from './StorePicker'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
