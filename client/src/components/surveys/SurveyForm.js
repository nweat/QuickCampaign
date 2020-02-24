import React from "react"
import _ from "lodash"
import { reduxForm, Field } from "redux-form"
import { Link } from "react-router-dom"
import SurveyField from "./SurveyField"
import validateEmails from "../../utils/validateEmails"
import formFields from "./formFields"
/*
this.props.handleSubmit is a function provided default by redux form,
we pass an arrow function to it that is called when the form is submitted 
*/

class SurveyForm extends React.Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} type="text" name={name} label={label} component={SurveyField} />
    })
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        {/* call "onSurveySubmit" only until form is submitted*/}
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

//"validate" provides "values" parameter with form values
function validate(values) {
  const errors = {}

  //attach the error to the given property
  //error must match up to one of the fields
  //and error is automatically attached to the field
  errors.recipients = validateEmails(values.recipients || "")

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value"
    }
  })

  //if errors is empty, redux will assume there are no errors
  return errors
}

//configures "surveyForm"
export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false //keep the form values
})(SurveyForm)
