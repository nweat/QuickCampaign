import React from "react"
import "../css/styles.css"

const Landing = () => {
  return (
    <div>
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-medium">
            <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
          </div>

          <div className="row">
            <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omdnis earum qui.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.</p>
          </div>
        </section>

        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.</p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-compass"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.</p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-map"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.</p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-heart"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.</p>
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
