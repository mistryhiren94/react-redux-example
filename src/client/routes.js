import React from 'react'
import asyncComponent from './hoc/asyncRender'
import { Route, Switch } from 'react-router-dom'
import Private from 'hoc/private'

const AppLayout = asyncComponent(() =>
  import('components/AppLayout').then(module => module.default)
)

const Home = asyncComponent(() =>
  import('containers/Home').then(module => module.default)
)

export const Routes = () => {
  return (
    <Switch>
      <Private component={AppLayout} />
    </Switch>
  )
}

export const ContentRoute = () => {
  return (
    <Switch>
      <Route exact path="*" component={Home} />
    </Switch>
  )
}
export default Routes
