import React, { Component } from 'react';
import Section from './components/Section';
import PageTitle from './components/PageTitle';
import Title from './components/Title';
import ContactForm from './components/ContactForm';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitHandler = newContact => {
    const { contacts } = this.state;

    this.setState({ contacts: [...contacts, newContact] });
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
          <ContactForm submitHandler={this.submitHandler} />
        </Section>

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
