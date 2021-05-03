import React from "react";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import NotistackProvider from "./providers/NotistackProvider";
import store from "./store";
import theme from "./theme/theme";
import Routes from "./Routes";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NotistackProvider>
          <Routes />
        </NotistackProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
