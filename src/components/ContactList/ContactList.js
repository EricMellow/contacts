import React, { Component } from "react";
import './ContactList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { deleteContact } from '../../redux/actions';

class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      filteredContacts: [],
    };
  }

  componentDidMount() {
    this.setState({
      filteredContacts: this.props.contacts
    })
  }
  

  deleteContact = async (contact) => {
    await this.props.deleteContact(contact);
    this.setState({
      filteredContacts: this.props.contacts
    })
  }

  filterContacts = (event) => {
    let filtered = this.props.contacts.filter(contact => 
      contact.name.toLowerCase().includes(event.target.value.toLowerCase()) || 
      contact.phone.toLowerCase().includes(event.target.value.toLowerCase()) ||
      contact.email.toLowerCase().includes(event.target.value.toLowerCase()))

    this.setState({
      filteredContacts: filtered,
    })
  }

  render() {
    if (this.props.contacts.length) {
      let contacts = this.state.filteredContacts.map(contact => {
        return (
          <li key={contact.id} className="contact" tabIndex="0" aria-label="contact card">
            <header className="name" tabIndex="0">{contact.name}</header>
            <section>
              <p tabIndex="0" className="info">Phone Number: {contact.phone}</p>
              <p tabIndex="0" className="info">Email Address: {contact.email}</p>
            </section>
            <button className="delete-btn" onClick={() => this.deleteContact(contact)}>Delete Contact</button>
          </li>
        )
      })
      return (
        <main className="contact-list">
          <form id="search" role="search">
            <input 
              type="search" 
              className="search-input" 
              spellCheck="false" 
              placeholder="Search Contacts"
              onChange={this.filterContacts}/>
          </form>
          <ul className="contact-container">
            {contacts}
          </ul>
        </main>
      );
    } else {
      return (
        <main className="contact-list-empty">
          <h3 className="empty-message">You don't currently have any contacts. Click "Add Contacts" above to start adding new contacts.</h3>
        </main>
      )
    }
    
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export const mapStateToProps = (state) => ({
  contacts: state.contacts
});

export const mapDispatchToProps = (dispatch) => ({
  deleteContact: (contact) => dispatch(deleteContact(contact)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactList));