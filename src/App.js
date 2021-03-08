import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from './components/Section';
import PageTitle from './components/PageTitle';
import Title from './components/Title';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = uuidv4();
    const { contacts, name, number } = this.state;

    if (!name) {
      return;
    }

    const newContact = { id: id, name: name, number: number };

    this.setState({ contacts: [...contacts, newContact] });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const filtered = this.state.contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(this.state.filter) ||
        number.includes(this.state.filter),
    );

    return (
      <div>
        <PageTitle title="Phone Book" />
        <Section>
          <Title title="Add contacts" />
        </Section>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleInputChange}
            autoComplete="off"
            required
          />
        </label>
        <ul>
          {filtered.length ? (
            filtered.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))
          ) : (
            <li>No contact found</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
