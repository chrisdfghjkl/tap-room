import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <div className="container">
        <div className="keg-card-detail">
          <h3><b>{keg.name}</b></h3>
          <p><em>{keg.type}</em></p>
          <p>{keg.brewery}</p>
          <p>ABV: {keg.abv}%</p>
          <p>${keg.price}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;