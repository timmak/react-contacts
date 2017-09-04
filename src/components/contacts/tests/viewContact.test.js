import React from "react";
import renderer from "react-test-renderer";
import ViewContacts from "./../viewContacts";

it("should match snapshot", () => {
  const viewContacts = renderer.create(<ViewContacts />);
  const tree = card.toJSON();
  expect(tree).toMatchSnapshot();
});
