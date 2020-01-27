import React from "react"
import { connect } from "react-redux"
import { fetchSurveys } from "../../actions/index"
import "../../sass/main.scss"

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys()
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p id="body">{survey.body}</p>
            <p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
          </div>
          <div className="card-action">
            <a>
              <span className="text">Yes</span>
              <span class="white-text" id="yes">
                {survey.yes}
              </span>
            </a>
            <a>
              <span className="text">No</span>
              <span class="white-text" id="no">
                {survey.no}
              </span>
            </a>
          </div>
        </div>
      )
    })
  }

  render() {
    return <div>{this.renderSurveys()}</div>
  }
}
function mapStateToProps({ surveys }) {
  return {
    surveys
  }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)
