import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';

class App extends Component {
	state = {
		visible: true,
		error: false
	}
	componentDidCatch(){
		console.log('error');
		this.setState({
			error: true
		})
	}
	onToggleV = () =>{
		this.setState(({visible}) => ({
			visible: !visible
		}));
	}
	
	render(){
		const toggleBlock = this.state.visible ? <RandomChar/> : null;
			if(this.state.error){
			return <ErrorMessage/>
			}
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
														<CharacterPage/>
														
										</Container>
						</>
			);
	}
    
};

export default App;