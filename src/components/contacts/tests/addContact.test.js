import React from "react";
import renderer from "react-test-renderer";
import AddContact from "./../addContact";
import { Provider } from "react-redux";
import store from "./../../../store";

it("should match snapshot", () => {
  const addContact = renderer.create(
    <Provider store={store}>
      <AddContact />
    </Provider>
  );
  const tree = addContact.toJSON();
  expect(tree).toMatchSnapshot();
});
