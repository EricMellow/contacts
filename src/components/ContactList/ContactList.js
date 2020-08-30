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
      
    };
  }

  deleteContact = (contact) => {
    this.props.deleteContact(contact);
  }

  render() {
    if (this.props.contacts.length) {
      let contacts = this.props.contacts.map(contact => {
        return (
          <li key={contact.id}>
            <header>{contact.name}</header>
            <section>
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
            </section>
            <button onClick={() => this.deleteContact(contact)}>Delete Contact</button>
          </li>
        )
      })
      return (
        <main>
          <h3>Contacts: </h3>
          <ul>
            {contacts}
          </ul>
        </main>
      );
    } else {
      return (
        <main>
          <h3>You don't currently have any contacts. Click "Add Contacts" above to start adding new contacts.</h3>
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