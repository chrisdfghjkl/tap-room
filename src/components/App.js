import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";
import './../Styles.css';

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <KegControl />
    </React.Fragment>
  );
}

export default App;
