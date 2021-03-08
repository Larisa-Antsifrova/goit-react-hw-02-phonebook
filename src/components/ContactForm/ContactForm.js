import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    submitHandler: PropTypes.func.isRequired,
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
    const { name, number } = this.state;

    if (!name) {
      return;
    }

    const newContact = { id: id, name: name, number: number };

    this.props.submitHandler(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
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
        <button type="submit" className={styles.btn}>
          Add
        </button>
      </form>
    );
  }
}

export default ContactForm;
