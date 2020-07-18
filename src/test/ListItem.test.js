import React from "react";
import ListItem from "../components/ListItem";
import { render, cleanup, fireEvent } from "@testing-library/react";

afterEach(cleanup);

describe("ListItem testing", () => {
  test("matches snapshot", () => {
    const fakeTask = { id: 1, item: "to learn Jest", completed: false };
    const { asFragment } = render(<ListItem task={fakeTask} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("renders listItem", () => {
    const fakeTask = { id: 1, item: "to learn Jest", completed: false };
    const { queryByTestId, queryByDisplayValue } = render(
      <ListItem task={fakeTask} />
    );
    expect(queryByDisplayValue("to learn Jest")).toBeInTheDocument();
    expect(queryByTestId("listItem")).toBeInTheDocument();
  });
  test("checkbox, deleteButton clicked", () => {
    const fakeTask = { id: 1, item: "to learn Jest", completed: false };
    const mockSetCompleted = jest.fn();
    const mockDeleteTask = jest.fn();
    const { queryByTestId } = render(
      <ListItem
        task={fakeTask}
        setCompleted={mockSetCompleted}
        deleteTask={mockDeleteTask}
      />
    );
    fireEvent.click(queryByTestId("checkbox"));
    expect(mockSetCompleted).toBeCalled();
    fireEvent.click(queryByTestId("deleteBtn"));
    expect(mockDeleteTask).toBeCalled();
  });
});
