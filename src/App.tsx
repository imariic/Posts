import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { UsersProvider } from "providers";
import AppRoutes from "routes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UsersProvider>
        <AppRoutes />
      </UsersProvider>
    </ThemeProvider>
  );
}

export default App;
