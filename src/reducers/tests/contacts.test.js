import initialState from "./../contacts/initialState";
import {
  addContact,
  removeContact,
  setContactFormField,
  resetContactForm,
  setContactForm
} from "../../actions/contacts";
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
  const nextState = contacts({ contacts: {} }, addContact(newContact));
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

it("should set a contact form field ", () => {
  const currentState = {
    form: {
      firstName: "Tyrion",
      lastName: "Lannister",
      email: "tyrion@kingslanding.com"
    }
  };
  const nextState = contacts(
    currentState,
    setContactFormField({
      field: "email",
      value: "john@thewall.com"
    })
  );
  expect(nextState.form).toEqual({
    firstName: "Tyrion",
    lastName: "Lannister",
    email: "john@thewall.com"
  });
});

it("should reset contact form  ", () => {
  const currentState = {
    form: {
      firstName: "Tyrion",
      lastName: "Lannister",
      email: "tyrion@kingslanding.com"
    }
  };
  const nextState = contacts(currentState, resetContactForm());
  expect(nextState.form).toEqual(initialState.form);
});

it("should reset contact form  ", () => {
  const currentState = {
    contacts: {
      "tyrion@kingslanding.com": {
        firstName: "Tyrion",
        lastName: "Lannister",
        email: "tyrion@kingslanding.com"
      }
    },
    form: {
      firstName: "",
      lastName: "",
      email: ""
    }
  };
  const nextState = contacts(
    currentState,
    setContactForm("tyrion@kingslanding.com")
  );
  expect(nextState.form).toEqual({
    firstName: "Tyrion",
    lastName: "Lannister",
    email: "tyrion@kingslanding.com"
  });
});
