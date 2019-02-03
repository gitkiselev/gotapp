import React, {Component} from 'react';
import './itemList.css';
import styled from 'styled-components';
const ListItem = styled.li`
	   cursor: pointer;
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
	`
export default class ItemList extends Component {
	
	
    render() {
        return (
            <ul className="item-list list-group">
                <ListItem className="list-group-item">
                    John Snow
                </ListItem>
                <ListItem className="list-group-item">
                    Brandon Stark
                </ListItem>
                <ListItem className="list-group-item">
                    Geremy
                </ListItem>
            </ul>
        );
    }
}