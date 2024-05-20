import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

it("Should contain six link tags", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const links = screen.getAllByRole("link");

  expect(links.length).toBe(6);
});

it("Should render with the cart items set to 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const link = screen.getByText("Cart (0)");
  expect(link).toBeInTheDocument();
});

it("Should render the header component with a link to Home tab", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const homeLink = screen.getByRole("link",{name: "Home"});
  expect(homeLink).toBeInTheDocument();
});
