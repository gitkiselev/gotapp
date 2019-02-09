import React, { Component } from "react";
import "./charDetails.css";
import gotService from "../../services/gotService";
import styled from "styled-components";
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";
const CharBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  color: #000;
`;
export default class CharDetails extends Component {
  gotService = new gotService();
  state = {
    char: null,
				error: false,
				loading: true
  };
  componentDidMount() {
    this.updateChar();
  }
  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
		}
		onCharLoaded = char => {
			this.setState({
					char,
					loading: false
			});
	};
	onError = (err) => {
			this.setState({
					error: true,
					loading: false
			});
	};
  updateChar() {
    const { charId } = this.props;
    if (!charId) {
      return;
    }
    this.gotService
      .getCharacter(charId)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }
  
		render() {
			
			const { char, loading, error } = this.state;
			const errorMessage = error ? <ErrorMessage /> : null;
			const spinner = loading ? <Spinner /> : null;
			const content = !(loading || error) ? <View char={char} /> : null;

			return (
					<CharBlock>
							{errorMessage}
							{spinner}
							{content}
					</CharBlock>
			);
	}
}




const View = ({ char }) => {
	const { name, gender, born, died, culture} = char;
	return (
		
			<>
					
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
          </li>
        </ul>
      
			</>
	);
};