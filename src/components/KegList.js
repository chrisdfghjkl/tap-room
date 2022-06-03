import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <div id="keg-card-holder">
        {props.kegList.map((keg) =>
          <div className="keg-card-single">
            <Keg
              whenKegClicked = { props.onKegSelection }
              name={keg.name}
              type={keg.type}
              brewery={keg.brewery}
              abv={keg.abv}
              price={keg.price}
              pints={keg.pints}
              id={keg.id}
              key={keg.id}/>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;