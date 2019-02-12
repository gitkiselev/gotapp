import React, { Component } from "react";
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../itemDetails";
import gotService from "../../../services/gotService";
import RowBlock from '../../rowBlock';


export default class BooksPage extends Component {
	gotService = new gotService();
  state = {
    selectedBook: 103,
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

			const booksList = (
				<ItemList onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllBooks}
				renderItem={({name}) => name }/>
			)

			const booksDetails = (
				<ItemDetails itemId={this.state.selectedItem}>
					<Field fields='name' label='Name'/>
					<Field fields='numbersOfPages' label='Numbers of pages'/>
					<Field fields='publisher' label='Publisher'/>
					<Field fields='released' label='Released'/>
				</ItemDetails>
			)
    return (
      <RowBlock left={booksList} right={booksDetails}/>
    )
  }
}
