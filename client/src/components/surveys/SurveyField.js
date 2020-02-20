import React from "react"
import "../../sass/main.scss"

export default ({ input, label, meta: { error, touched } }) => {
  console.log(error) //props are passed from "Field" auotmatically
  return (
    <div id="formFields">
      <label> {label}</label>
      <input {...input} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  )
}
