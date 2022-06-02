import React from "react";
import Keg from "./Keg";
// import PropTypes from "prop-types";

const defaultKegs = [
  {
    name: "Pale Ale",
    type: "Pale Ale",
    brewery: "Saranac",
    abv: "5.5",
    price: "$5.00"
  },
  {
    name: "Burned Bridges",
    type: "IPA",
    brewery: "Ex Novo",
    abv: "6.2",
    price: "$6.00"
  },
  {
    name: "Cold Chillin;",
    type: "Cream Ale",
    brewery: "Wild Ride",
    abv: "4.8",
    price: "$5.00"
  }
];

function KegList(){
  return (
    <React.Fragment>
      <div id="keg-card-holder">
        {defaultKegs.map((keg, index) =>
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

export default KegList;