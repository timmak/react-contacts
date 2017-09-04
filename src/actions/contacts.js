import { ADD_CONTACT, REMOVE_CONTACT } from '../CONSTANTS'

export function addContact (data) {
  return {
    type: ADD_CONTACT,
    data
  }
}

export function removeContact (data) {
  return {
    type: REMOVE_CONTACT,
    data
  }
}
