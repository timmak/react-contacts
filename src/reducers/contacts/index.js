import initialState from "./initialState";
import { ADD_CONTACT, REMOVE_CONTACT } from "./../../CONSTANTS";
import { assocPath, dissocPath } from "ramda";

function addContact(state, data) {
  return assocPath(["contacts", data.email], data, state);
}

function removeContact(state, data) {
  return dissocPath(["contacts", data], state);
}

export default function(state = initialState, { type, data } = {}) {
  switch (type) {
    case ADD_CONTACT:
      return addContact(state, data);
    case REMOVE_CONTACT:
      return removeContact(state, data);
    default:
      return state;
  }
}
