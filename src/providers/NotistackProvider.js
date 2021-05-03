import React, { createRef } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { SnackbarProvider } from "notistack";
import { IconButton } from "@material-ui/core";
import GrowTransition from "../transitions/GrowTransition";

const NotistackProvider = (props) => {
  const { children } = props;
  const notistackRef = createRef();

  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={5000}
      TransitionComponent={GrowTransition}
      ref={notistackRef}
      action={(key) => (
        <IconButton onClick={onClickDismiss(key)}>
          <CloseIcon />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
};

export default NotistackProvider;
