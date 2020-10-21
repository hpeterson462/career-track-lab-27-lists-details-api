import React, { Component } from 'react';
import { getApi } from '../services/api.js';

export default class ApiData extends Component {
  state = {
    characters: []
  }

  handleButtonClick = async () => {
    const characters = await getApi();
    console.log(characters);
    this.setState({ characters });
  }


  render() {
    return (
      < div >
        <h1>Lord of the Rings Characters</h1>
        <ul>
          {this.state.characters.map(character => (
            <li key={character._id}>
              <a>{character.name}</a>
            </li>))}
        </ul>
        <button onClick={this.handleButtonClick}>Get Characters</button>
      </div >
    );
  }
}