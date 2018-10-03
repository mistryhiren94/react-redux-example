import React from 'react'
import presenter from 'hoc/presenter'
import indexPM from './indexPM'
import * as Actions from 'actions/tickets'
import './index.scss'

const Home = props => {
  return (
    <div className="home-container">
      React-Redux-Example
    </div>
  )
}

export default presenter(
  store => ({
    
  }),
  Actions
)(indexPM, Home)
