import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainKegList: [
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
          name: "Cold Chillin'",
          type: "Cream Ale",
          brewery: "Wild Ride",
          abv: "4.8",
          price: "$5.00"
        }
      ],
      formVisibleOnPage: false,
      // mainKegList: []
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToMenu = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToMenu} />;
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList}/>;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default KegControl;