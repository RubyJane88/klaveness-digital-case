import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureAppStore } from "./store/configureStore";
import NavigationBar from "components/NavigationBar";
import routes, { renderRoutes } from "./Routes";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

export const store = configureAppStore();

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <BrowserRouter>
            <>
              <NavigationBar />
              <Container>{renderRoutes(routes)}</Container>
            </>
          </BrowserRouter>
        </MuiPickersUtilsProvider>
      </CssBaseline>
    </Provider>
  );
};
export default App;
