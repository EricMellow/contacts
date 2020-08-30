import React from 'react';
import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';

export default function App() {

  return (
    <div className="app">
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Contacts'>Contacts</NavLink>
      </header>
      <main>
        <Switch>
          <Route path="/Contacts">
            <h1>Contacts</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}
