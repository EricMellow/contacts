import React from 'react';
import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import ContactList from '../ContactList/ContactList'

export default function App() {
  
  return (
    <div className="app">
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Contacts'>Add Contacts</NavLink>
      </header>
      <main>
        <Switch>
          <Route path="/Contacts">
            <h1>Add Contacts</h1>
          </Route>
          <Route path="/">
            <ContactList />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
