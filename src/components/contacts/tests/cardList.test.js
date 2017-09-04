import React from "react";
import renderer from "react-test-renderer";
import CardList from "./../cardsList";

it("should match snapshot", () => {
  const cardList = renderer.create(<CardList />);
  const tree = cardList.toJSON();
  expect(tree).toMatchSnapshot();
});
