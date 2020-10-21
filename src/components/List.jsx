import React, { Component } from 'react';
import { getApi } from '../services/api.js';

export default class ApiData extends Component {
  state = {
    characters: []
  }

  handleButtonClick = async () => {
    const characters = await getApi();

    this.setState({ characters });
  }

  handleNameClick = async (e) => {
    e.preventDefault();
    this.props.history.push(`/Details/${character._id}`)
  }


  render() {
    return (
      < div >
        <h1>Lord of the Rings Characters</h1>
        <ul>
          {this.state.characters.map(character => (
            <li key={character._id}>
              <a onClick={this.handleNameClick}>{character.name}</a>
            </li>))}
        </ul>
        <button onClick={this.handleButtonClick}>Get Characters</button>
      </div >
    );
  }
}