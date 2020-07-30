import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import { handleReceiveQuestions } from "../actions/questions"
import { handleReceiveUsers } from "../actions/users"
import Login from "./Login"
import HomePage from "./HomePage"
import PrivateRoute from "./PrivateRoute"
import Nav from "./Nav"
import AddQuestion from "./AddQuestion"
import Leaderboard from "./Leaderboard"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveQuestions())
    this.props.dispatch(handleReceiveUsers())
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Nav/>
          {this.props.loading
            ? null
            : <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute path="/add" component={AddQuestion} />
                <PrivateRoute path="/leaderboard" component={Leaderboard} />
                <Route component={Error} />
              </Switch>}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    loading: Object.keys(users).length === 0 || Object.keys(questions).length === 0
  }
}

export default connect(mapStateToProps)(App);
