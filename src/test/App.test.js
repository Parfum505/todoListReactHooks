import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders title", () => {
  const { getByText } = render(<App />);
  const h1Element = getByText("ToDo List with React Hooks");
  expect(h1Element).toBeInTheDocument();
});
