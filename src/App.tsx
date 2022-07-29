import React from "react";
import { usePosts } from "hooks";
import { Post } from "components";

function App() {
  const posts = usePosts();

  return (
    <div className="App">
      {posts?.map((item) => (
        <Post post={item} />
      ))}
    </div>
  );
}

export default App;
