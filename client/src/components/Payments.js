import React from "react"
import StripeCheckout from "react-stripe-checkout"
import { connect } from "react-redux"
import * as actions from "../actions/index"
import "../sass/main.scss"

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <a href="#">
          <small class="notification-badge">{this.props.credits}</small>
          <i className="material-icons heading-icon">shopping_basket</i>
        </a>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments)
