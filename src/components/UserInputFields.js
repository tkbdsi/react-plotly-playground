import React from "react";

const UserInputFields = () => {

  return(
    <section className="user-input-fields">
      <h3>User Inputs</h3>
      <form className="user-input-form">
        <span>
          <label htmlFor="length-value">L: </label>
          <input type="text" name="length-value"></input>
        </span>
        <span>
          <label htmlFor="length-value">n: </label>
          <input type="text" name="node-value"></input> 
        </span>
      </form>
    </section>
  )
}

export default UserInputFields;