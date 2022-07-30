import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PostDetailsPage, PostsPage } from "pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="posts" />} />
      <Route path="posts" element={<PostsPage />} />
      <Route path="posts/:id" element={<PostDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
