import React from "react";

const UserInputFields = ({updateBoxWidth,updateEnergyNode,updateSteps}) => {

  return(
    <section className="user-input-fields">
      <h3>User Inputs</h3>
      <form className="user-input-form">
        <span>
          <label htmlFor="length-value">L: </label>
          <input type="number" name="length-value" min="1.0" step="0.1" id="length-value" onChange={updateBoxWidth}></input>
        </span>
        <span>
          <label htmlFor="node-value">n: </label>
          <input type="number" name="node-value" min="0.0" step="1.0" id="node-value" onChange={updateEnergyNode}></input> 
        </span>
        <span>
          <label htmlFor="steps-value">Steps: </label>
          <input type="number" name="steps-value" min="1.0" step="10.0" id="steps-value" onChange={updateSteps}></input> 
        </span>
      </form>
    </section>
  )
}

export default UserInputFields;