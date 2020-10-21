import React, { Component } from 'react';
import { getApi } from '../services/api.js';

export default class ApiData extends Component {
  state = {
    characters: []
  }

  handleClick = async () => {
    const characters = await getApi();

    this.setState({ characters });
  }

  render() {
    return (
      <div>
        <h1>Lord of the Rings Characters</h1>
        <ul>
          {this.state.characters.map(character => (
            <li key={character.id}>
              <a href={character.name}>{character.name}</a>
            </li>))}
        </ul>
        <button onClick={this.handleClick}>Get Characters</button>
      </div>
    );
  }
}