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
export default class ItemList extends Component {
  gotService = new gotService();
  state = {
    charList: null,
				error: false,
				loading: true
  };
  componentDidMount() {
    this.gotService.getAllCharacters().then(charList => {
      this.setState({ charList });
    }); //.this.foo.bar = 0;
  }
  renderItems(arr) {
    return arr.map((item, id) => {
      console.log(item.id);
      return (
        <ListItem key={id} onClick={() => this.props.onCharSelected(id)}>
          {item.name} <span>ID {item.id}</span>
        </ListItem>
      );
    });
  }
  render() {
    const { charList } = this.state;
    if (this.state.error) {
      return <ErrorMessage />;
    }
    if (!charList) {
      return <Spinner />;
    }
    const items = this.renderItems(charList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}
