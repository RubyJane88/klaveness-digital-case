import ContractsPage from "pages/ContractsPage";
import { store } from "App";
import { getContractsAction } from "features/contracts/contractAsyncActions";
import { render, screen, waitFor } from "test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";

describe("Contracts Page", () => {
  it("should render title", () => {
    render(<ContractsPage />);

    const title = screen.getByTestId("title-page");
    expect(title).toBeInTheDocument();
  });

  it("should render loading message", async () => {
    render(<ContractsPage />);

    const loading = screen.getByTestId("loading");
    expect(loading).toHaveTextContent("Loading.. Please wait..");
  });

  it("should dispatch getContractsAction", async () => {
    await store.dispatch(getContractsAction());
    let state = store.getState().contract;
    expect(state.contracts).toHaveLength(2);
  });

  it("should show exact number of contracts in main content and navigation bar", async () => {
    render(<ContractsPage />);

    const cards = await screen.findAllByTestId("card");
    expect(cards).toHaveLength(2);
  });
});
