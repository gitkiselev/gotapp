import React, { Component } from "react";
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../itemDetails";
import gotService from "../../../services/gotService";
import RowBlock from '../../rowBlock';


export default class CharacterPage extends Component {
	gotService = new gotService();
  state = {
    selectedItem: 130,
    error: false
  };
  onItemSelected = id => {
    console.log(id);
    this.setState({
      selectedItem: id
    });
  };
  componentDidCatch() {
    this.setState({
      error: true
    });
  }
  render() {

			const charList = (
				<ItemList onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllCharacters}
				renderItem={({name, gender}) => `${name} (${gender})`}/>
			)

			const charDetails = (
				<ItemDetails charId={this.state.selectedItem}>
				<Field fields='gender' label='Gender'/>
				<Field fields='born' label='Born'/>
				<Field fields='died' label='Died'/>
				<Field fields='culture' label='Culture'/>
				</ItemDetails>
			)
    return (
      <RowBlock left={charList} right={charDetails}/>
    )
  }
}
