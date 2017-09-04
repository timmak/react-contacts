import React from "react";
import renderer from "react-test-renderer";
import EditContact from "./../editContact";

it("should match snapshot", () => {
  const editContact = renderer.create(<EditContact />);
  const tree = editContact.toJSON();
  expect(tree).toMatchSnapshot();
});
