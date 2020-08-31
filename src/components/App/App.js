import React from 'react';
import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import ContactList from '../ContactList/ContactList';
import AddContacts from '../AddContacts/AddContacts';

export default function App() {
  
  return (
    <div className="app">
      <header className="nav-header">
        <NavLink to='/home' activeClassName="selected" className="link">Home</NavLink>
        <NavLink to='/contacts' activeClassName="selected" className="link">Add Contacts</NavLink>
      </header>
      <main className="router-content">
        <Switch>
          <Route exact path="/contacts">
            <AddContacts />
          </Route>
          <Route exact path="/home">
            <ContactList />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
