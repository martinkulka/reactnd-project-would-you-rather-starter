import React, { Component } from "react"
import { connect } from "react-redux"

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <h1>Leaderboard</h1>
      </div>
    );
  }
}

export default connect()(Leaderboard)