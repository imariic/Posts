import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PostsPage } from "pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="posts" />} />
      <Route path="posts" element={<PostsPage />} />
    </Routes>
  );
};

export default AppRoutes;
