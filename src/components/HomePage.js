import React, { Component } from "react"
import { connect } from "react-redux"

class HomePage extends Component {
  render() {
    return (
      <h1>HEY THATS PRETTY GAY</h1>
    )
  }
}

export default connect()(HomePage)