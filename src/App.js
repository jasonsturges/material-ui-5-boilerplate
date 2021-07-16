import React from "react";
import { Provider } from "react-redux";
import { CssBaseline, StyledEngineProvider } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import NotistackProvider from "./providers/NotistackProvider";
import store from "./store";
import theme from "./theme/theme";
import Routes from "./Routes";

function App() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NotistackProvider>
            <Routes />
          </NotistackProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
