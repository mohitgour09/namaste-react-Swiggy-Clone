import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter, json } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should render restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const text = screen.getByText("North Indian, Biryani - ₹150 for two")
  expect(text).toBeInTheDocument();
});
