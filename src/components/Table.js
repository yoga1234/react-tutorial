import React, { Component } from 'react';

import Form from './Form';
import TableHead from './TableComponent/TableHead';
import TableBody from './TableComponent/TableBody';

class Table extends Component {
  state = {
    characters: []
  }

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }

  render() {
    return (
      <div className="container">
        <Form handleSubmit={this.handleSubmit} />
        <table>
          <TableHead />
          <TableBody characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        </table>
      </div>
    )
  }
}

export default Table;