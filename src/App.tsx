import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { ModalProvider, UsersProvider } from "providers";
import AppRoutes from "routes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UsersProvider>
        <ModalProvider>
          <AppRoutes />
        </ModalProvider>
      </UsersProvider>
    </ThemeProvider>
  );
}

export default App;
