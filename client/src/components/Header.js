import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Payments from "./Payments"

class Header extends React.Component {
  renderContent() {
    console.log(this.props)
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        )
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? "/surveys" : "/"} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    )
  }
}

//gets called with the entire state and passed as props to the component
//here we can pull out what we need from the state, access the key name given to the reducer
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
