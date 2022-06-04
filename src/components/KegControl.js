import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { v4 } from "uuid";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainKegList: [
        {
          name: 'Pale Ale',
          type: 'Pale Ale',
          brewery: 'Saranac',
          abv: '5.5',
          price: '4.00',
          pints: 60,
          id: v4()
        },
        {
          name: 'Vortex IPA',
          type: 'IPA',
          brewery: 'Ft. George',
          abv: '7.7',
          price: '7.00',
          pints: 92,
          id: v4()
        },
        {
          name: 'Rose City Sour',
          type: 'Sour',
          brewery: 'Cascade Brewing',
          abv: '5.7',
          price: '5.00',
          pints: 71,
          id: v4()
        },
        {
          name: 'Kollaps',
          type: 'Kölsch',
          brewery: 'Wayfinder Beer',
          abv: '4.7',
          price: '6.50',
          pints: 30,
          id: v4()
        },
        {
          name: 'Kinda Dry',
          type: 'Cider',
          brewery: 'Portland Cider Co.',
          abv: '6.9',
          price: '6.00',
          pints: 10,
          id: v4()
        },
        {
          name: 'Utica Club',
          type: 'Pilsner',
          brewery: 'Saranac',
          abv: '5.0',
          price: '3.00',
          pints: 0,
          id: v4()
        }
      ],
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    }
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToMenu = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
        mainKegList: editedMainKegList,
        editing: false,
        selectedKeg: null
      });
  }

  handleSellPint = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    if (selectedKeg.pints > 0) {
      selectedKeg.pints--;
    } else {
      selectedKeg.pints = 0;
    }
    const newMainKegList = this.state.mainKegList.map(
      keg => { return keg.id === id ? selectedKeg : keg}
    )
    this.setState({
      mainKegList: newMainKegList
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Menu";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick} onClickingSellPint = {this.handleSellPint} />
      buttonText = "Return to Menu";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToMenu} />;
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg}/>;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        <div class="switch d-grid gap-2">
          <button class="btn btn-lg btn-warning b-wide" type='button' onClick={this.handleClick}>{buttonText}</button>
        </div>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default KegControl;