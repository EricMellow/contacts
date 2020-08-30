import React, { Component } from "react";
import './AddContacts.css';

class AddContacts extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  render() {
    return (
      <main>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email:</label>
          <input type="email" id="email" required />
          <small>Format: you@example.com</small>
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          <small>Format: 123-456-7890</small>
          <input type="submit" value="Save Contact"></input>
        </form>
      </main>
    );
  }
}

export default AddContacts;
