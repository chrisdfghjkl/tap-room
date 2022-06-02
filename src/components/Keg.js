import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div className="container">
        <h3><b>{props.name}</b></h3>
        <p><em>{props.type}</em></p>
        <p>{props.brewery}</p>
        <p>ABV: {props.abv}</p>
        <p>{props.price}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  brewery: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
};

export default Keg;