import axiosInstance from "api";

const getAllPosts = async (): Promise<PostType[]> => {
  try {
    const response = await axiosInstance.get("/posts");

    if (response) return response.data;
  } catch (e) {
    console.error(e);
  }

  return [];
};

export default {
  getAllPosts,
};
