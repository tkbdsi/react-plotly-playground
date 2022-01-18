import React from "react";

const UserInputFields = (props) => {

  return(
    <section className="user-input-fields">
      <h3>User Inputs</h3>
      <form className="user-input-form">
        <span>
          <label htmlFor="length-value">L: </label>
          <input type="number" name="length-value" min="1.0" step="0.1" id="length-value"></input>
        </span>
        <span>
          <label htmlFor="node-value">n: </label>
          <input type="number" name="node-value" min="0.0" step="1.0" id="node-value"></input> 
        </span>
      </form>
    </section>
  )
}

export default UserInputFields;