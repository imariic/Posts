import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { PostsPage } from "pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PostsPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
