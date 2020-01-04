import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { connect } from "react-redux"
import * as actions from "../actions"
import Header from "./Header"
import Landing from "./Landing"
import Dashboard from "./Dashboard"
import SurveyNew from "./surveys/SurveyNew"

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" component={Landing} exact />
          <Route path="/surveys" component={Dashboard} exact />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    )
  }
}

//connect so component can call action creators
//the action creators are added to the component props
export default connect(null, actions)(App)
