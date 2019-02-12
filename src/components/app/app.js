import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../pages/characterPage";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";
import ItemList from "../itemList";
import ItemDetails from "../itemDetails";
import gotService from "../../services/gotService";

export default class App extends Component {
	gotService = new gotService();
  state = {
			onToggleV: true,
    visible: true,
    error: false
  };
  componentDidCatch() {
    console.log("error");
    this.setState({

      error: true
    });
  }
  onToggleV = () => {
    this.setState(({ visible }) => ({
      visible: !visible
    }));
  };

  render() {
    const toggleBlock = this.state.visible ? <RandomChar /> : null;
    if (this.state.error) {
      return <ErrorMessage/>;
    }
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <button onClick={this.onToggleV}>Скрыть/показать</button>
              {toggleBlock}
            </Col>
          </Row>
          <CharacterPage />
										<Row>
												<Col md={6}>
														<ItemList
															onItemSelected={this.onItemSelected}
															getData={this.gotService.getAllCharacters}
															
															renderItem={(item) => item.name}/>
													
												</Col>
												<Col md={6}>
												<ItemDetails itemId ={this.state.selectedChar}
																									onItemSelected={this.onItemSelected}/>
												
												</Col>
										</Row>	
										<Row>
												<Col md={6}>
														<ItemList
															onItemSelected={this.onItemSelected}
															getData={this.gotService.getAllBooks}
															
															renderItem={(item) => item.name}/>
													
												</Col>
												<Col md={6}>
												<ItemDetails itemId ={this.state.selectedItem}
																									onItemSelected={this.onItemSelected}/>
												
												</Col>
										</Row>	
											<Row>
													<Col md={6}>
														<ItemList
														onItemSelected={this.onItemSelected}
														getData={this.gotService.getAllHouses}
														renderItem={(item) => item.name}/>
													</Col>
													<Col md={6}>
														<ItemDetails charId ={this.state.selectedItem}
														onItemSelected={this.onItemSelected}/>
													</Col>
											</Row>
        </Container>
      </>
    );
  }
}


