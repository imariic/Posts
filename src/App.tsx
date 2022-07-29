import React, { useEffect } from "react";
import { getAllPosts } from "services";

function App() {
  useEffect(() => {
    getAllPosts().then((response) => console.log(response));
  }, []);
  return <div className="App">haharere</div>;
}

export default App;
