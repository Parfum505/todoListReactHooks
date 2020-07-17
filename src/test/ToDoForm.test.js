import React from "react";
import ToDoForm from "../components/ToDoForm";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("ToDoForm component", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<ToDoForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("form renders correctly", () => {
    const {
      getByPlaceholderText,
      getByText,
      getByTestId,
      queryByText,
    } = render(<ToDoForm />);
    expect(getByPlaceholderText("Enter text ...")).toBeInTheDocument();
    expect(getByText("Add")).toBeInTheDocument();
    expect(getByTestId("form")).toBeInTheDocument();
    expect(queryByText("Please fill out this field.")).toBeNull();
  });

  test("form submit correctly", () => {
    const mocAddTask = jest.fn();
    const { queryByText, getByPlaceholderText } = render(
      <ToDoForm addTask={mocAddTask} />
    );
    const input = getByPlaceholderText("Enter text ...");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(queryByText("Add"));
    expect(queryByText("Please fill out this field.")).toBeNull();
  });

  test("form submit empty input", () => {
    const mocAddTask = jest.fn();
    const { queryByText, getByPlaceholderText } = render(
      <ToDoForm addTask={mocAddTask} />
    );
    const input = getByPlaceholderText("Enter text ...");
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(queryByText("Add"));
    expect(queryByText("Please fill out this field.")).toBeInTheDocument();
  });

  test("input state updates on change", () => {
    const { queryByPlaceholderText } = render(<ToDoForm />);
    const input = queryByPlaceholderText("Enter text ...");
    fireEvent.change(input, { target: { value: "some text" } });
    expect(input.value).toBe("some text");
  });
});
