import React, { Component } from 'react';
import { getApi } from '../services/api.js';
import { Link } from 'react-router-dom';

export default class List extends Component {
  state = {
    characters: []
  }

  handleButtonClick = async () => {
    const characters = await getApi();

    this.setState({ characters });
  }

  render() {
    return (
      < div >
        <h1>Lord of the Rings Characters</h1>
        <ul>
          {this.state.characters.map(character => (
            <Link to={`/details/${character._id}`} key={`${character._id}`}>
              <li key={character._id}>
                <span>{character.name}</span>
              </li>
            </Link>
          ))}
        </ul>
        <button onClick={this.handleButtonClick}>Get Characters</button>
      </div >
    );
  }
}
