import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import ViewContacts from "./components/contacts/viewContacts";
import AddContact from "./components/contacts/addContact";
import EditContact from "./components/contacts/editContact";

export default () => (
  <div className="App">
    <nav className="App-navbar">
      <Link to="/">Contacts</Link>
      <span className="spacer" />
      <Link className="button" to="/contacts/add">
        Add Contact
      </Link>
    </nav>
    <main className="App-main">
      <Switch>
        <Route exact path="/" component={ViewContacts} />
        <Route exact path="/contacts/add" component={AddContact} />
        <Route exact path="/contacts/edit" component={EditContact} />
      </Switch>
    </main>
  </div>
);
