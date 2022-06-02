import React from "react";
import Header from "./Header";
import KegList from "./KegList";
import './../Styles.css';

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <KegList />
    </React.Fragment>
  );
}

export default App;
