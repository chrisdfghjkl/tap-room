import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <div id="keg-card-holder">
        {props.kegList.map((keg, index) =>
          <div className="keg-card-single">
            <Keg name={keg.name}
              type={keg.type}
              brewery={keg.brewery}
              abv={keg.abv}
              price={keg.price}
              key={index}/>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;