import React from "react";
import { useParams } from "react-router-dom";

const PostDetailsPage = () => {
  const params = useParams();
  return <div>{params.id}</div>;
};

export default PostDetailsPage;
