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

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <main>
        <form>
          <label for="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange}
            required />
          <label for="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={this.state.email} 
            onChange={this.handleChange}
            required />
          <small>Format: you@example.com</small>
          <label for="phone">Phone Number:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
            value={this.state.phone} 
            onChange={this.handleChange}
            required />
          <small>Format: 123-456-7890</small>
          <input type="submit" value="Save Contact"></input>
        </form>
      </main>
    );
  }
}

export default AddContacts;
