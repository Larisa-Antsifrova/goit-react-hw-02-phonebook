import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h1>Phone Book</h1>
        <form>
          <label>
            Name
            <input type="name" />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <ul></ul>
      </div>
    );
  }
}

export default App;
