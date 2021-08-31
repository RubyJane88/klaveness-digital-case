import { render, screen } from "test-utils/testing-library-utils";
import HomePage from "../../pages/HomePage";

it("Navigation menus are present", () => {
  render(<HomePage />);

  const heroes = screen.getByRole("button", { name: "Contracts" });
  expect(heroes).toHaveTextContent("Contracts");
});
