import React, {Component} from 'react';
//import './itemList.css';
import styled from 'styled-components';
const ListItem = styled.li`
cursor: pointer;
`
export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <ListItem>
                    John Snow
                </ListItem>
                <ListItem>
                    Brandon Stark
                </ListItem>
                <ListItem>
                    Geremy
                </ListItem>
            </ul>
        );
    }
}