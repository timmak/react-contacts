import initialState from "./../contacts/initialState";
import { addContact, removeContact } from "../../actions/contacts";
import contacts from "./../contacts";

it("should return initial state is undefined and action is undefined", () => {
  const nextState = contacts(undefined, undefined);
  expect(nextState).toEqual(initialState);
});

it("should add a contact to the state.contacts object", () => {
  const newContact = {
    firstName: "John",
    lastName: "Snow",
    email: "john@thewall.com"
  };
  const nextState = contacts(undefined, addContact(newContact));
  expect(nextState).toEqual({
    contacts: {
      "john@thewall.com": newContact
    }
  });
});

it("should remove a contact from the state.contacts object", () => {
  const currentState = {
    contacts: {
      "john@thewall.com": {
        firstName: "John",
        lastName: "Snow",
        email: "john@thewall.com"
      },
      "tyrion@kingslanding.com": {
        firstName: "Tyrion",
        lastName: "Lannister",
        email: "tyrion@kingslanding.com"
      }
    }
  };
  const nextState = contacts(currentState, removeContact("john@thewall.com"));
  expect(nextState).toEqual({
    contacts: {
      "tyrion@kingslanding.com":
        currentState.contacts["tyrion@kingslanding.com"]
    }
  });
});
