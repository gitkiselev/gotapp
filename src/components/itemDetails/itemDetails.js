import React, { Component } from "react";
import "./itemDetails.css";
import gotService from "../../services/gotService";
import styled from "styled-components";
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";

const Field = ({item, field, label}) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
					<span className="term">{label}</span>
					<span>{item[field]}</span>
			</li>
	)
}
export {Field};
const CharBlock = styled.div`
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
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
		}
		onItemLoaded = item => {
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
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }
    this.gotService
      .getItem(itemId)
      .then(this.onItemLoaded)
      .catch(this.onError);
  }
  
		render() {
			
			const { item, loading, error } = this.state;
			const errorMessage = error ? <ErrorMessage /> : null;
			const spinner = loading ? <Spinner /> : null;
			const content = !(loading || error) ? <View item={item} /> : null;

			return (
					<CharBlock>
							{errorMessage}
							{spinner}
							{content}
					</CharBlock>
			);
	}
}




const View = ({item}) => {
	const {item} = this.state;
	const {name} = item;
	return (
		
			<>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
						{React.Children.map(this.props.children, (child)=>{
								return React.cloneElement(child, {item})//переименовать char -> item
						})
						}
				</ul>
			</>
	);
};