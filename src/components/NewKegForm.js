import React from "react";
import { v4 } from 'uuid';

function NewKegForm(props){
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
            <Button type='submit' className='btn btn-success'>Add Keg</Button>
          </div>
      </form>
      </div>
    </React.Fragment>
  );
}

export default NewKegForm;