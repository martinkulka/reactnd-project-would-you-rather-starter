import React, { Component } from "react"
import { connect } from "react-redux"

class AddQuestion extends Component {
  render() {
    return (
      <div>
        <h3>ADD QUESTION</h3>
      </div>
    );
  }
}

export default connect()(AddQuestion)