import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("test heading in the component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  // Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside Contact component in the component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");
  // Assertion
  expect(button).toBeInTheDocument();
});
test("Should load input fiend inside Contact component in the component", () => {
  render(<Contact />);

  const input = screen.getByPlaceholderText("name");
  // Assertion
  expect(input).toBeInTheDocument();
});
