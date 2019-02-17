import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../pages/characterPage";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";

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
										<BooksPage />
										<HousesPage />
											
        </Container>
      </>
    );
  }
}


