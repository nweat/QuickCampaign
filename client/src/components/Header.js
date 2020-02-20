import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Payments from "./Payments"
import "../sass/main.scss"

class Header extends React.Component {
  renderContent() {
    //console.log(this.props)
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href="/auth/google">
              <i className="material-icons heading-icon">account_circle</i>
            </a>
          </li>
        )
      default:
        return [
          <li key="1">
            <Payments credits={this.props.auth.credits} />
          </li>,
          <li key="2">
            <a href="/api/logout">
              <i className="material-icons heading-icon">exit_to_app</i>
            </a>
          </li>
        ]
    }
  }

  render() {
    return (
      <header className="header">
        <ul className="right">{this.renderContent()}</ul>

        <div className="header__logo-box">
          <Link to={this.props.auth ? "/surveys" : "/"}>
            <img className="header__logo" src="logo.png"></img>
          </Link>
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">QuickCampaign</span>
            <span className="heading-primary--sub">
              <span className="heading-primary--sub--text">Get Feedback Fast</span>
            </span>
          </h1>
        </div>
      </header>
    )
  }
}

//gets called with the entire state and passed as props to the component
//here we can pull out what we need from the state, access the key name given to the reducer
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
