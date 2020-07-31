import React, { Component } from "react"
import { connect } from "react-redux"
import QuestionsList from "./QuestionsList";

class HomePage extends Component {
  state = {
    opened: true
  }

  handleListChange = (event) => {
    event.preventDefault()

    this.setState((oldState) => ({
      opened: !oldState.opened
    }))
  }

  render() {
    const { opened } = this.state
    const listDecider = opened ? this.props.unansweredIds : this.props.answeredIds

    return (
      <div>
        <div className="question-bar">
          <button
            className={opened ? "active" : ""}
            onClick={this.handleListChange}
            disabled={opened}
          >Unanswered</button>
          <button
            className={!opened ? "active" : ""}
            onClick={this.handleListChange}
            disabled={!opened}
          >Answered</button>
        </div>
        <div>
          <QuestionsList list={listDecider} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const answers = Object.keys(users[authedUser].answers)

  return {
    unansweredIds: Object.keys(questions).filter((id) => !answers.includes(id)),
    answeredIds: answers
  }
}

export default connect(mapStateToProps)(HomePage)