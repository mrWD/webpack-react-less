import React, { Component } from 'react'

import './App.less'

class App extends Component {
  componentDidMount() {
    this.props.newAction()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>My React App!</h1>
      </div>
    )
  }
}

export default App
