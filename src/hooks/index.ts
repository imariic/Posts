import React, { useEffect, useState } from "react";
import { postService } from "services";

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    postService.getAllPosts().then((response) => setPosts(response));
  }, []);

  return posts;
};
