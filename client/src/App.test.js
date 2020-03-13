import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders cards after API call", async () => {
  const { findAllByTestId } = render(<App />);
  await findAllByTestId('playerCard');
})

test("the dark mode correctly", () => {
  const { getByText } = render(<App />);
  const darkToggle = getByText(/dark mode/i);
  expect(document.body.classList.contains('dark-mode')).toBe(false);
  fireEvent.click(darkToggle);
  expect(document.body.classList.contains('dark-mode')).toBe(true);
})
