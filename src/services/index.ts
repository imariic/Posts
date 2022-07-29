import axiosInstance from "api";

export const getAllPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get("/posts");

  if (response) return response.data;

  return [];
};
