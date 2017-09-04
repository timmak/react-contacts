import {
  addContact,
  removeContact,
  setContactForm,
  setContactFormField,
  resetContactForm
} from "./../contacts";
import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  SET_CONTACT_FORM,
  SET_FORM_FIELD,
  RESET_CONTACT_FORM
} from "./../../CONSTANTS";

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

it("should call setContactFormField with correct type and field", () => {
  const fieldToSet = {
    field: "firstName",
    value: "test"
  };
  const contactSetFormFieldAction = setContactFormField(fieldToSet);
  expect(contactSetFormFieldAction).toEqual({
    type: SET_FORM_FIELD,
    data: fieldToSet
  });
});

it("should call resetContactFrom with correct type and field", () => {
  const contactAction = resetContactForm();
  expect(contactAction).toEqual({
    type: RESET_CONTACT_FORM
  });
});

it("should call setContactFrom with data", () => {
  const testData = {
    firstName: "John",
    lastName: "Snow",
    email: "john@thewall.com"
  };
  const contactAction = setContactForm(testData);
  expect(contactAction).toEqual({
    type: SET_CONTACT_FORM,
    data: testData
  });
});
