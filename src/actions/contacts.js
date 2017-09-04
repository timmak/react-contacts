import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  SET_FORM_FIELD,
  RESET_CONTACT_FORM,
  SET_CONTACT_FORM
} from "../CONSTANTS";

export function addContact(data) {
  return {
    type: ADD_CONTACT,
    data
  };
}

export function removeContact(data) {
  return {
    type: REMOVE_CONTACT,
    data
  };
}

export function setContactFormField(data) {
  return {
    type: SET_FORM_FIELD,
    data
  };
}

export function resetContactForm(data) {
  return {
    type: RESET_CONTACT_FORM,
    data
  };
}

export function setContactForm(data) {
  return {
    type: SET_CONTACT_FORM,
    data
  };
}
