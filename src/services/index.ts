import axiosInstance from "api";

export const getAllPosts = async () => {
  const response = await axiosInstance.get("/posts");

  if (response) return response.data;

  return [];
};
