import React from "react";
import renderer from "react-test-renderer";
import Card from "./../card";

it("should match snapshot", () => {
  const card = renderer.create(
    <Card firstName="John" lastName="Snow" email="john@thewall.com" />
  );
  const tree = card.toJSON();
  expect(tree).toMatchSnapshot();
});
