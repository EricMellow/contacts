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
      <main className="add-contacts">
        <form onSubmit={this.saveContact} className="form-container">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Contact Name"
              className="inputs"
              value={this.state.name}
              onChange={this.handleChange}
              required />
          
          <div className="input-container">
            <input
                type="email"
                id="email"
                className="inputs"
                placeHolder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                required />
            <small aria-valuetext="Format: you@example.com" tabIndex="0">Format: you@example.com</small>
          </div>

          <div className="input-container">
            <input
                type="tel"
                id="phone"
                name="phone"
                className="inputs"
                placeHolder="Phone Number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={this.state.phone}
                onChange={this.handleChange}
                required />
            <small aria-label="Format: 123dash456dash7890" tabIndex="0">Format: 123-456-7890</small>
          </div>
          <input type="submit" value="Save Contact" className="save-btn"></input>
        </form>
      </main>
    );
  }
}


export const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(addContact(contact)),
});

export default withRouter(connect(null, mapDispatchToProps)(AddContacts));
