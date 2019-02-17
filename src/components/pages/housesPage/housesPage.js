import React, { Component } from "react";
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../itemDetails";
import gotService from "../../../services/gotService";
import RowBlock from '../../rowBlock';


export default class HousesPage extends Component {
	gotService = new gotService();
  state = {
    selectedItem: null,
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

			const housesList = (
				<ItemList onItemSelected={this.onItemSelected}
					getData={this.gotService.getAllHouses}
					renderItem={({name, region}) => `${name} (${region})`}/>
			)

			const housesDetails = (
				<ItemDetails itemId={this.state.selectedItem}
				getDetails = {this.gotService.getHouse}>
					<Field field='name' label='Name'/>
					<Field field='region' label='Region'/>
					<Field field='words' label='Words'/>
					<Field field='titles' label='Titles'/>
					<Field field='overlord' label='Overlord'/>
					<Field field='ancestralWeapons' label='Ancestral Weapons'/>
				</ItemDetails>
			)
    return (
      <RowBlock left={housesList} right={housesDetails}/>
    )
  }
}
