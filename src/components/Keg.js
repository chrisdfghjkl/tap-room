import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  let kegStatus;
  let statusClass = "full"
  if (props.pints < 1) {
    kegStatus = "Tapped!";
    statusClass = "tapped";
  } else if (props.pints < 13) {
    kegStatus = ">10%";
    statusClass = "ten";
  } else if (props.pints < 32) {
    kegStatus = "25%";
    statusClass = "two-five";
  } else if (props.pints < 65) {
    kegStatus = "50%";
    statusClass = "fifty";
  } else if (props.pints < 94) {
    kegStatus = "75%"
    statusClass = "seven-five";
  } else {
    kegStatus = "100%"
  }

  return (
    <React.Fragment>
      <div className="container">
        <div onClick = {() => props.whenKegClicked(props.id)}>
          <h3><b className="name">{props.name}</b> <span className="price">${props.price}</span></h3>
          <hr />
          <p className="brew-info"><em>{props.type}</em> - {props.brewery}</p>
          <p className="brew-info">ABV: {props.abv}%</p>
          <br/>
          <hr />
          <p className={statusClass}><b>Fill Status: {kegStatus}</b></p>
        </div>
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
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;