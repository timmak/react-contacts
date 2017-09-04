import React from "react";
import Card from "./card";
import { assoc } from "ramda";
import { Link } from "react-router-dom";

function EmptyContacts() {
  return (
    <div>
      <h1>
        You don't seem to have any contacts{" "}
        <Link to="/contacts/add">add one</Link>
      </h1>
    </div>
  );
}

function WithContacts({ contacts = [], actions }) {
  return (
    <div className="contacts-list">
      {contacts
        .map(contact =>
          assoc(
            "onClickDelete",
            () => actions.removeContact(contact.email),
            contact
          )
        )
        .map(contact =>
          assoc(
            "onClickEdit",
            () => actions.onClickEdit(contact.email),
            contact
          )
        )
        .map(Card)}
    </div>
  );
}

export default ({ contacts = [], actions }) =>
  contacts.length === 0 ? (
    <EmptyContacts />
  ) : (
    <WithContacts contacts={contacts} actions={actions} />
  );
