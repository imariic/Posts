import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import AppRoutes from "routes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
