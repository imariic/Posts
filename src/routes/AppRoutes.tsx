import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { withDisplayName } from "hoc";
import { PostDetailsPage, PostsPage } from "pages";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="posts" />} />
      <Route path="posts" element={<PostsPage />} />
      <Route path="posts/:id" element={<PostDetailsPage />} />
    </Routes>
  );
};

AppRoutes.displayName = "AppRoutes";

export default withDisplayName(AppRoutes);
