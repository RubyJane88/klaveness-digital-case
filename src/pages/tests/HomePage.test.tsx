import { render, screen } from "@testing-library/react";
import HomePage from "pages/HomePage";

it("should welcome message is visible", () => {
  render(<HomePage />);

  const title = screen.getByRole("heading", {
    name: "Klaveness Digital Case",
  });

  expect(title).toBeInTheDocument();
});
