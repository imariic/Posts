import React from "react";
import { ThemeProvider } from "styled-components";
import { usePosts } from "hooks";
import { Post } from "components";
import theme from "theme";

function App() {
  const posts = usePosts();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {posts?.map((item) => (
          <Post post={item} />
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
