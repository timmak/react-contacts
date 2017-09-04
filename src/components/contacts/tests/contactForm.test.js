import React from "react";
import renderer from "react-test-renderer";
import ContactForm from "./../contactForm";

it("should match snapshot", () => {
  const contactForm = renderer.create(<ContactForm />);
  const tree = contactForm.toJSON();
  expect(tree).toMatchSnapshot();
});
