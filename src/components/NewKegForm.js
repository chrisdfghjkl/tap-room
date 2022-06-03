import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }

  return (
    <React.Fragment>
      <div className="new-keg">
        <h3>New Keg</h3>
        <form onSubmit={handleNewKegFormSubmission}>
          <div className="form-control">
            <input 
              type='text'
              name='name'
              placeholder="Name"
              required
            />
            <input 
              type='text'
              name='type'
              placeholder="Beer Type"
              required
            />
            <input 
              type='text'
              name='brewery'
              placeholder="Brewery"
              required
            />
            <input 
              type='number'
              step='any'
              name='abv'
              placeholder="%ABV"
              required
            />
            <input 
              type='number'
              name='price'
              placeholder="Price"
              required
            />
            <button type='submit' className='btn btn-success'>Add Keg</button>
          </div>
      </form>
      </div>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;