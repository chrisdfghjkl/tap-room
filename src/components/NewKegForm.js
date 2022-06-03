import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, type: event.target.type.value, brewery: event.target.brewery.value, abv: event.target.abv.value, price: event.target.price.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <div id="new-keg" className="form-control">
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
          <button type='submit' className='btn btn-success'>Add Keg</button>
        </div>
    </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;