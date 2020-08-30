import React, { Component } from "react";
import './AddContacts.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addContact } from '../../redux/actions';

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

  saveContact = (event) => {
    event.preventDefault();
    const contact = {
      id: Date.now(),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };
    this.props.addContact(contact);
    this.clearInputs();
  }

  clearInputs() {
    this.setState({
      name: '',
      email: '',
      phone: '',
    })
  }

  render() {
    return (
      <main>
        <form onSubmit={this.saveContact}>
          <label>Name: 
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required />
          </label>
          
          <label>Email: 
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              required />
          </label>
          <small>Format: you@example.com</small>
          <label>Phone Number: 
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={this.state.phone}
              onChange={this.handleChange}
              required />
          </label>
          <small>Format: 123-456-7890</small>
          <input type="submit" value="Save Contact"></input>
        </form>
      </main>
    );
  }
}


export const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(addContact(contact)),
});

export default withRouter(connect(null, mapDispatchToProps)(AddContacts));
