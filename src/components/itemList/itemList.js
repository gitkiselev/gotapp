import React, { Component } from "react";
import "./itemList.css";
import styled from "styled-components";
import gotService from "../../services/gotService";
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
  gotService = new gotService();
  state = {
    charList: null,
    error: false,
    loading: true
  };
  componentDidMount() {
    this.gotService
      .getAllCharacters()
      .then(this.onCharLoaded)
      .catch(this.onError);
    //this.foo.bar = 0;
  }
  onCharLoaded = charList => {
    this.setState({
      charList,
      loading: false
    });
  };
  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };
  renderItems(arr) {
    return arr.map(item => {
      const { id, name } = item;
      return (
        <ListItem key={id} onClick={() => this.props.onCharSelected(id)}>
          {name} <span>ID {id}</span>
        </ListItem>
      );
    });
  }
  render() {
    const { charList, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? this.renderItems(charList) : null;

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
