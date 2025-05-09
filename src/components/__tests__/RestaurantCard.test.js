import { render, screen } from "@testing-library/react";
import RestaurantCard, { WithPromotedLabel } from "../RestaurantCard";
import Mock_Data from "../../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should load restaurant card component", () => {
  render(<RestaurantCard resData={Mock_Data} />);

  const name = screen.getByText("Bakery World");
  expect(name).toBeInTheDocument();
});

it("Should load restaurant card component with promoted label", () => {
  const PromotedRestaurant = WithPromotedLabel(RestaurantCard);

  render(<PromotedRestaurant resData={Mock_Data} />);

  const label = screen.getByText("Promoted");
  expect(label).toBeInTheDocument();
});
