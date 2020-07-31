import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import { logoutUser } from "../actions/authedUser";

const Nav = ({ authedUser, userInfo, dispatch, history }) => {

  const logout = (event) => {
    event.preventDefault()

    dispatch(logoutUser())
    history.push("/login")
  }

  if (authedUser) {
    const { avatarURL, name } = userInfo

    return (
      <div className="nav-bar">
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' activeClassName='active'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' activeClassName='active'>
                Leaderboard
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="avatar-area">
          <img className="avatar" src={avatarURL} alt="Your avatar"/>
          <p>{name}</p>
          <button className="active" onClick={logout}>Logout</button>
        </div>
      </div>
    )
  }

  return null
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    userInfo: users[authedUser]
  }
}

export default withRouter(connect(mapStateToProps)(Nav))