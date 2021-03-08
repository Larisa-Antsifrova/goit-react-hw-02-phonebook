import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [{ id: 1, name: 'Larisa' }],
    name: '',
  };

  handleInputChange = event => {
    const { value } = event.currentTarget;

    this.setState({ name: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = uuidv4();
    const { contacts, name } = this.state;

    if (!name) {
      return;
    }

    const newContact = { id: id, name: name };

    this.setState({ contacts: [...contacts, newContact] });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <h1>Phone Book</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
