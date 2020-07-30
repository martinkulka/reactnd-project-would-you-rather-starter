import React, { Component } from "react"
import { connect } from "react-redux"
import logo from "../imgs/logo.png"
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    user: ""
  }

  handleChoice = (event) => {
    event.persist()
    this.setState(() => ({
      user: event.target.value
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const from = this.props.location !== null && this.props.location.state !== null
      ? this.props.location.state.from.pathname
      : "/"

    this.props.dispatch(setAuthedUser(this.state.user))
    this.props.history.push(`${from}`)
  }

  render() {
    return (
      <div className="login">
        <h1>Welcome to the Would you rather...? app.</h1>
        <img
          className="logo"
          src={logo}
          alt="Would you rather...?"
        />
        <h2>Log in as:</h2>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <select value={this.state.user} onChange={this.handleChoice}>
            <option>Choose:</option>
            {this.props.users.map((user) => (
              <option key={user} value={user}>{user}</option>
            ))}
          </select>
          <div>
            <button className="login-button">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)