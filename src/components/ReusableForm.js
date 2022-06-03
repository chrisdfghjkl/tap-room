import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <div className="form-control keg-form">
      <h3>New Keg</h3>
      <input
            type='text'
            name='name'
            placeholder="Name"
            required
          />
          <br />
          <input 
            type='text'
            name='type'
            placeholder="Beer Type"
            required
          />
          <br />
          <input 
            type='text'
            name='brewery'
            placeholder="Brewery"
            required
          />
          <br />
          <input 
            type='number'
            step='any'
            name='abv'
            placeholder="%ABV"
            required
          />
          <br />
          <input 
            type='number'
            step='any'
            name='price'
            placeholder="Price"
            required
          />
          <br/>
          <input 
            type='number'
            step='any'
            max='124'
            name='pints'
            placeholder="Pints"
            required
          />
          <br />
          <br />
        <button className="btn btn-primary" type='submit'>{props.buttonText}</button>
        </div>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;