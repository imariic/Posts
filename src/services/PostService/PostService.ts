import axiosInstance from "api";

const getAllPosts = async (): Promise<PostType[]> => {
  const response = await axiosInstance.get("/posts");

  if (response) return response.data;

  return [];
};

export default {
  getAllPosts,
};
