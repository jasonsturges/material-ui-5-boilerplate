import React from "react";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import store from "./store";
import theme from "./theme/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
