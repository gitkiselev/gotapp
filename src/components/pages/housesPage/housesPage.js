import React, { Component } from "react";
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../itemDetails";
import gotService from "../../../services/gotService";
import RowBlock from '../../rowBlock';


export default class HousesPage extends Component {
	gotService = new gotService();
  state = {
    selectedItem: 130,
    error: false
  };
  onItemSelected = id => {
    console.log(id);
    this.setState({
      selectedChar: id
    });
  };
  componentDidCatch() {
    this.setState({
      error: true
    });
  }
  render() {

			const housesList = (
				<ItemList onItemSelected={this.onItemSelected}
					getData={this.gotService.getAllHouses}
					renderItem={({name, region}) => `${name} (${region})`}/>
			)

			const housesDetails = (
				<ItemDetails charId={this.state.selectedItem}>
					<Field fields='name' label='Name'/>
					<Field fields='region' label='Region'/>
					<Field fields='words' label='Words'/>
					<Field fields='titles' label='Titles'/>
					<Field fields='overlord' label='Overlord'/>
					<Field fields='ancestaralWeapons' label='Ancestaral Weapons'/>
				</ItemDetails>
			)
    return (
      <RowBlock left={housesList} right={housesDetails}/>
    )
  }
}
