import React from "react"
import { connect } from "react-redux";

const Question = ({ questionInfo, authorInfo }) => {
  return (
    <h2>{authorInfo.name}</h2>
  )
}

function mapStateToProps({ users, questions }, { id }) {
  return {
    questionInfo: questions[id],
    authorInfo: users[questions[id].author]
  }
}

export default connect(mapStateToProps)(Question)