import { addContact, removeContact } from "./../contacts";
import { ADD_CONTACT, REMOVE_CONTACT } from "./../../CONSTANTS";

it("should call addContact with correct type and field", () => {
  const contactToAdd = {
    firstName: "John",
    lastName: "Snow",
    email: "john@thewall.com"
  };
  const contactAction = addContact(contactToAdd);
  expect(contactAction).toEqual({
    type: ADD_CONTACT,
    data: contactToAdd
  });
});

it("should call removeContact with correct type and field", () => {
  const contactToRemove = "12345";
  const contactAction = removeContact(contactToRemove);
  expect(contactAction).toEqual({
    type: REMOVE_CONTACT,
    data: contactToRemove
  });
});
