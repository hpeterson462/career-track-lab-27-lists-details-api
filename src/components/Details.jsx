import React, { Component } from 'react';
import { getApiById } from '../services/api';
import List from './List';
//import { Link } from 'react-router-dom';

export default class Details extends Component {
  state = {
    name: '',
    race: '',
    gender: '',
    wikiUrl: '',
    character: []
  }

  componentDidMount = async () => {
    const characterId = this.props.match.params;
    console.log(characterId, 'Character Id');
    // .then(character => ({
    //   name: character.name,
    //   race: character.race,
    //   gender: character.gender,
    //   wikiUrl: character.wikiUrl
    // }));
    const character = getApiById(characterId);
    console.log(character, 'Character');
    this.setState({ character })
  }

  render() {
    const { character } = this.state;

    return (
      <>
        <ul>
          <List {...character} />
        </ul>
      </>
    )
  }
}
