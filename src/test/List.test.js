import React from "react";
import { render } from "@testing-library/react";
import List from "../components/List";

describe("List component", () => {
  const mockListItems = [
    { id: 1, item: "to learn Jest", completed: false },
    { id: 2, item: "to commit changes", completed: true },
  ];
  test("matches snapshot", () => {
    const { asFragment } = render(<List list={mockListItems} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("render listItems", () => {
    const { queryAllByTestId } = render(<List list={mockListItems} />);
    const listItems = queryAllByTestId("listItem");
    expect(listItems.length).toBe(2);
    const mockTodos = mockListItems.map((todo) => todo.item);
    const todos = listItems.map(
      (li) => li.querySelector(".form-control").value
    );
    expect(mockTodos).toEqual(todos);
  });
  test("render emty listItems", () => {
    const emptyList = [];
    const { queryAllByTestId } = render(<List list={emptyList} />);
    expect(queryAllByTestId("listItem").length).toBe(0);
  });
});
