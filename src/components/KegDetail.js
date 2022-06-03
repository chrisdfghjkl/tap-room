import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className="container">
        <div className="keg-card-detail">
          <h3><b>{keg.name}</b></h3>
          <p><em>{keg.type}</em></p>
          <p>{keg.brewery}</p>
          <p>ABV: {keg.abv}%</p>
          <p>${keg.price}</p>
          <button className="btn btn-danger" type="button" onClick={()=> onClickingDelete(keg.id) }>Remove Keg</button>
        </div>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;