import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, GlobalStyles, StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@mui/material/styles";
import Notifications from "./components/Notifications";
import NotistackProvider from "./providers/NotistackProvider";
import Routes from "./routes";
import globalStyles from "./theme/globalStyles";
import store from "./store";
import theme from "./theme/theme";

function App() {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          <ThemeProvider theme={theme}>
            <NotistackProvider>
              <Notifications />
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </NotistackProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </RecoilRoot>
  );
}

export default App;
