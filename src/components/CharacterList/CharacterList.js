import React, { Component } from "react";
// Import the CSS file as a module.
import styles from "./CharacterList.module.css";
import Character from '../Character/Character';
import globalStyles from "../../assets/bootstrap.module.css";
import cx from 'classnames'

// Constant To store API url.
const API_URL = "https://rickandmortyapi.com/api/character/";

class CharacterList extends Component {

  constructor(){
    super();
    this.filter = this.filter.bind(this);
  }


  // Initialize the State in Class Component.
  state = {
    characters: [],
    displayCharacters: []
  };

  // Use ASYNC/AWAIT inside lifecycle method.
  async componentDidMount() {
    try {
      const response = await fetch(API_URL).then(resp => resp.json());
      // Add the current characters to the chars array.
      let chars = [...this.state.characters];
      // Add the results from the API response.
      chars.push(...response.results);

      // ALWAYS use this.setState() in a Class Method.
      this.setState({
        characters: chars,
        displayCharacters: chars
      });
    } catch (e) {
      console.error(e);
    }
  }


  filter = (e) => {
    //CASE SENSITIVE - TOLOWERCASE DIDN'T WORK
    this.setState({displayCharacters:this.state.characters.filter(char => char.name.includes(e.target.value))});

  }


  // Required render() method in Class Component.
  render() {
    // Create an array of JSX to render
    const charactersListToShow = this.state.displayCharacters.map((char, index) => {
      // This should render Character components. - Remember the key.
      return (
        <div className='col-sm'>
          <Character key={index} character={char} />
        </div>
      );
    });

    // Render MUST return valid JSX.
    return (
      <div className={cx (styles.CharacterList, globalStyles['form-group'])}>
        <h1>Rick &amp; Morty</h1>
        <input type="search" placeholder="Search.." onChange={this.filter} className={globalStyles['form-control']}></input>
        <div className="Characters row">{charactersListToShow}</div>
      </div>
    );
  }
}

export default CharacterList;
