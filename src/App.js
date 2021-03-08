import React, { Component } from 'react';
import Section from './components/Section';
import PageTitle from './components/PageTitle';
import Title from './components/Title';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
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
    const existingContact = contacts.find(
      contact => contact.name === newContact.name,
    );
    if (existingContact) {
      alert(`${existingContact.name} is already in contacts.`);
    }
    this.setState({ contacts: [...contacts, newContact] });
  };

  filterUpdate = event => {
    const { value } = event.currentTarget;

    this.setState({
      filter: value,
    });
  };

  render() {
    const filtered = this.state.contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(this.state.filter.toLocaleLowerCase()) ||
        number.includes(this.state.filter),
    );

    return (
      <div>
        <PageTitle title="Phone Book" />
        <Section>
          <Title title="Add contacts" />
          <ContactForm submitHandler={this.submitHandler} />
          <Title title="Сontacts" />
          <Filter
            filterValue={this.state.filter}
            filterUpdate={this.filterUpdate}
          />
          <ContactList filtered={filtered} />
        </Section>
      </div>
    );
  }
}

export default App;
