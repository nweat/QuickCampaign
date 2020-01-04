import React from "react"
import { reduxForm } from "redux-form"
import SurveyForm from "./SurveyForm"
import SurveyFormReview from "./SurveyFormReview"

class SurveyNew extends React.Component {
  state = { showFormReview: false }

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />
    }

    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
  }

  render() {
    return <div>{this.renderContent()}</div>
  }
}

//whenever navigating away from SurveyNew
//adding "reduxForm" will clear out form values
//which is default behaviour of redux
export default reduxForm({
  form: "surveyForm"
})(SurveyNew)
