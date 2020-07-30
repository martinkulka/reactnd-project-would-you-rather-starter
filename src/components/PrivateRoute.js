import React, { Component } from "react"
import { Redirect, Route } from "react-router-dom"
import { connect } from "react-redux"

class PrivateRoute extends Component  {
  render() {
    const { component: Component, authedUser, ...rest } = this.props

    return (
      <Route
        {...rest}
        render={props =>
          authedUser
            ? <Component {...props} />
            : <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
        }
      />
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(PrivateRoute)