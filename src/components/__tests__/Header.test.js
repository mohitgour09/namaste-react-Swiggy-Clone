import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header";
import "@testing-library/jest-dom";

it("Should render the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});

it("Should render cart in the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/);

  expect(cartItem).toBeInTheDocument();
});
it("Should render cart in the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "LogIn" });
  fireEvent.click(loginButton);
  const logOutButton = screen.getByRole("button", { name: "LogOut" });
  fireEvent.click(logOutButton);
});
