import React from "react";
import Contacts from "./cardsList";
import actions from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";

const ViewContacts = ({ contacts, contactsActions, onClickEdit }) => {
  return (
    <div>
      <Contacts
        contacts={contacts}
        actions={{ onClickEdit, ...contactsActions }}
      />
    </div>
  );
};

function mapDispatchToProp(dispatch) {
  return {
    contactsActions: bindActionCreators(actions.contacts, dispatch),
    onClickEdit(contact) {
      dispatch(actions.contacts.setContactForm(contact));
      dispatch(push("/contacts/edit"));
    }
  };
}

export default connect(
  ({ contacts }) => ({
    contacts: Object.values(contacts.contacts)
  }),
  mapDispatchToProp
)(ViewContacts);
