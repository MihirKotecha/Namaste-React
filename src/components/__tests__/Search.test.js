import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import resList from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resList);
    },
  });
});

it("Should change the number of cards on searching", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchBtn = screen.getByRole("button", { name: "Enter" });
  const searchInput = screen.getByPlaceholderText(
    "Enter the name of the restraunt"
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  // console.log(searchInput);
  fireEvent.change(searchInput, { target: { value: "l" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  // console.log(cards);
  expect(cardsAfterSearch.length).not.toBe(cardsBeforeSearch.length);
});

it("Should filter the top rated restraunts", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeClick = screen.getAllByTestId("resCard");
  const topRatedBtn = screen.getByRole("button",{name: "Top Rated Restraunts"});
  fireEvent.click(topRatedBtn);
  const cardsAfterClick = screen.getAllByTestId("resCard");
  expect(cardsAfterClick.length).not.toBe(cardsBeforeClick.length);
});

