import React, { useEffect, useState } from "react";
import { postService, userService } from "services";

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    postService.getAllPosts().then((response) => setPosts(response));
  }, []);

  return posts;
};

export const useUsers = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    userService.getAllUsers().then((response) => setUsers(response));
  }, []);

  return users;
};
