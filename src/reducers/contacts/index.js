import initialState from "./initialState";
import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  SET_FORM_FIELD,
  RESET_CONTACT_FORM,
  SET_CONTACT_FORM
} from "./../../CONSTANTS";
import { assocPath, dissocPath } from "ramda";

function addContact(state, data) {
  return assocPath(["contacts", data.email], data, state);
}

function setContactFormField(state, { field, value }) {
  return assocPath(["form", field], value, state);
}

function setContactForm(state, data) {
  return assocPath(["form"], state.contacts[data], state);
}

function removeContact(state, data) {
  return dissocPath(["contacts", data], state);
}

function resetContactFrom(state, data) {
  return assocPath(["form"], initialState.form, state);
}

export default function(state = initialState, { type, data } = {}) {
  switch (type) {
    case ADD_CONTACT:
      return addContact(state, data);
    case REMOVE_CONTACT:
      return removeContact(state, data);
    case SET_FORM_FIELD:
      return setContactFormField(state, data);
    case RESET_CONTACT_FORM:
      return resetContactFrom(state);
    case SET_CONTACT_FORM:
      return setContactForm(state, data);
    default:
      return state;
  }
}
