import React, { Component } from "react";
import "./itemDetails.css";
import gotService from "../../services/gotService";
import styled from "styled-components";
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";

const Field = ({item, field, label}) => {//item элемент, field поле, label подпись поля
	return (
		<li className="list-group-item d-flex justify-content-between">
					<span className="term">{label}</span>
					<span>{item[field]}</span>
			</li>
	)
}
export {Field}
const ItemBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  color: #000;
`;
export default class ItemDetails extends Component {
  gotService = new gotService();
  state = {
    item: null,
				error: false,
				loading: false
  };
  componentDidMount() {
			console.log('did mount');
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
		}
		onItemLoaded = item => {
			console.log('load');
			this.setState({
					item,
					loading: false
			});
	};
	onError = (err) => {
			this.setState({
					error: true,
					loading: false
			});
	};
	updateItem() {
		console.log('update');
		const { itemId, getDetails } = this.props;
		console.log(itemId);
    if (!itemId) {
					console.log(itemId);
      return;
				}
				console.log(itemId);
    getDetails(itemId)
      .then(this.onItemLoaded)
      .catch(this.onError);
  }
  
		render() {
			console.log('render');
			if (!this.state.item) {
				return <span className="select-error">Please select a character</span>
				
		}
		console.log(this.state);
			const { item, loading, error } = this.state;
			const {name} = item;
			const view = (
				<>
						<h4>{(item !== null) ? name : ''}</h4>
						<ul>
								{
										React.Children.map(this.props.children, (child) => {
												return React.cloneElement(child, {item});//{item} приходит со стейта
										})
								}
						</ul>
				</>
		)
			const errorMessage = error ? <ErrorMessage /> : null;
			const spinner = loading ? <Spinner /> : null;
			const content = !(loading || error) ? view : null;

			return (
					<ItemBlock>
							{errorMessage}
							{spinner}
							{content}
					</ItemBlock>
			);
	}
}




