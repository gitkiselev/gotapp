import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


class App extends Component {
	state = {
		visible: true
	}
	onToggleV = () =>{
		this.setState(({visible}) => ({
			visible: !visible
		}));
	}
	render(){
		const toggleBlock = this.state.visible ? <RandomChar/> : null;
					return (
						<> 
										<Container>
														<Header />
										</Container>
										<Container>
														<Row>
																		<Col lg={{size: 5, offset: 0}}>
																						<button onClick={this.onToggleV}>Скрыть/показать</button>
																						{toggleBlock}
																		</Col>
														</Row>
														<Row>
																		<Col md='6'>
																						<ItemList />
																		</Col>
																		<Col md='6'>
																						<CharDetails />
																		</Col>
														</Row>
										</Container>
						</>
			);
	}
    
};

export default App;