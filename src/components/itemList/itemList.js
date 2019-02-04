import React, {Component} from 'react';
import './itemList.css';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
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
					gotService = new gotService();
					state = {
						charList: null,
						error: false
						
						
					}
	componentDidMount(){
		this.gotService.getAllCharacters()
		.then((charList) => {
			this.setState({charList})
		})//.this.foo.bar = 0;
	}
	renderItems(arr, url){
		return arr.map((item, url) => {
			console.log(item.url);
		return (
			
			<ListItem
			key={url}
			onClick={ () => this.props.onCharSelected(url)}>
								{item.name} <span>{item.url}</span>
				</ListItem>
		)
	})
	}
    render() {
					
					const {charList} = this.state;
					if(this.state.error){
						return <ErrorMessage/>
						}
					if(!charList) {
						return <Spinner/>
					}
					const items = this.renderItems(charList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}