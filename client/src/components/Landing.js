import React from "react"
import "../css/styles.css"

const Landing = () => {
  return (
    <div>
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-medium">
            <h2 className="heading-secondary">Creating and managing campaigns has never been easier</h2>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="u-center-text u-margin-bottom-medium">
                <i className="feature-box__icon icon-basic-todolist-pen"></i>
                <div className="text">Create a Campaign </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="u-center-text u-margin-bottom-medium">
                <i className="feature-box__icon icon-basic-paperplane"></i>
                <div className="text">Send to your clients </div>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="u-center-text u-margin-bottom-medium">
                <i className="feature-box__icon icon-basic-sheet-multiple"></i>
                <div className="text"> visualize client feedback</div>
              </div>
            </div>

            <div class="col">
              <a href="#" class="btn-text">
                Learn more &rarr;
              </a>
            </div>
          </div>
        </section>

        <section className="section-features">
          <div className="row">
            <div className="col-1-of-3">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Connect with Clients</h3>
                <p className="feature-box__text">
                  If you are just starting out or already a big company, getting the answer to that question starts with just an email
                </p>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-book"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">User Acceptance</h3>
                <p className="feature-box__text">Going to launch that new product soon? QuickCampaign fits perfectly in your beta testing plans.</p>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-lightbulb"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Plan for the future</h3>
                <p className="feature-box__text">
                  Want to see how your users would accept that new feature or major change? Listen to what your clients have to say first
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

/*
- Find out about your product acceptance or how it can be improved
- It starts with an email to connect with your audience 
- Creating email campaigns is as easy as Create. Send. Connect. 
*/

export default Landing
