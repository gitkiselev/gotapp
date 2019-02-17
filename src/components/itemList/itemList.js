import React, { Component } from "react";
import "./itemList.css";
import styled from "styled-components";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";
const ListItem = styled.li`
  cursor: pointer;
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
const ListBlock = styled.div`
  img {
    width: 100%;
  }
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;
export default class ItemList extends Component {
  
  state = {
    itemList: null,
    error: false,
    loading: true
  };
  componentDidMount() {
			const {getData} = this.props;
    getData()
					.then((itemList) => {
							this.setState({
								itemList,
								loading: false
							})
					})
		}
      
      
    //this.foo.bar = 0;
					
  updateItem = itemList => {
    this.setState({
      itemList,
      loading: false
    }).then(this.onItemLoaded)
				.catch(this.onError);
  };
  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };
  renderItems(arr) {
    return arr.map(item => {
						const {id} = item;
						const label = this.props.renderItem(item);
      return (
        <ListItem key={id} onClick={() => this.props.onItemSelected(id)}>
          {label} <span>ID {id}</span>
        </ListItem>
      );
    });
  }
  render() {
    const { itemList, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? this.renderItems(itemList) : null;

    return (
      <ListBlock>
        <ul className="item-list list-group">
          {errorMessage}
          {spinner}
          {content}
        </ul>
      </ListBlock>
    );
  }
}
