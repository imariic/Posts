import React, { useEffect } from "react";
import { postService, commentService } from "services";

function App() {
  useEffect(() => {
    //postService.getAllPosts().then((response) => console.log(response));
    commentService.getCommentsByPostId(1).then((res) => console.log(res));
  }, []);
  return <div className="App">haharere</div>;
}

export default App;
