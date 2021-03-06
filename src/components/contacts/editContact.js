import React from "react";
import ContactFrom from "./contactForm";
import actions from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";

function EditContact({ form, contactsActions, navigate }) {
  return (
    <div>
      <h1>Edit contact</h1>
      <ContactFrom
        form={form}
        onSubmit={onSubmit}
        onInputChange={contactsActions.setContactFormField}
      />
    </div>
  );

  function onSubmit() {
    contactsActions.addContact(form);
    contactsActions.resetContactForm();
    navigate("/");
  }
}

function mapDispatchToProp(dispatch) {
  return {
    contactsActions: bindActionCreators(actions.contacts, dispatch),
    navigate(route) {
      dispatch(push(route));
    }
  };
}

export default connect(
  ({ contacts }) => ({
    form: contacts.form
  }),
  mapDispatchToProp
)(EditContact);
