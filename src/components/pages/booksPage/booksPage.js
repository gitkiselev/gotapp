import React, { Component } from "react";
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../itemDetails";
import gotService from "../../../services/gotService";
import RowBlock from '../../rowBlock';


export default class BooksPage extends Component {
	gotService = new gotService();
  state = {
    selectedItem: null,
    error: false
  };
  onItemSelected = id => {
    
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

			const booksList = (
				<ItemList onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllBooks}
				renderItem={({name}) => name }/>
			)

			const booksDetails = (
				<ItemDetails itemId={this.state.selectedItem}
				getDetails = {this.gotService.getBook}>
					<Field field='name' label='Name'/>
					<Field field='numbersOfPages' label='Numbers of pages'/>
					<Field field='publisher' label='Publisher'/>
					<Field field='released' label='Released'/>
				</ItemDetails>
			)
    return (
      <RowBlock left={booksList} right={booksDetails}/>
    )
  }
}
