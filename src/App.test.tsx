import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { store } from "./redux/store";

describe("App", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );

  it("should render application main header", () => {
    expect(screen.getByText("ToDo List")).toBeInTheDocument();
  });
});
