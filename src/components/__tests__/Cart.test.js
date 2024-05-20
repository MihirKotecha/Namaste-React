const { render, screen, act, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu.jsx";
import Header from "../Header.jsx";
import MOCK_DATA from "../mocks/resMenuData.json";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should increase the cart items in the header", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>

        <RestaurantMenu />
      </Provider>
    )
  );
  const accordianHeader = screen.getByText("McSaver Combos (2pc Combos) (47)");
  fireEvent.click(accordianHeader);
  const addButton = screen.getAllByText("Add +");
  fireEvent.click(addButton[0]);
  const cartItemsValue = screen.getByText("Cart (1)");
  expect(cartItemsValue).toBeInTheDocument();
});
