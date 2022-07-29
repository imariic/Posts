import axiosInstance from "api";

const getCommentsByPostId = async (postId: number): Promise<CommentType[]> => {
  const response = await axiosInstance.get("/comments", {
    params: {
      postId,
    },
  });

  if (response) return response.data;

  return [];
};

export default {
  getCommentsByPostId,
};
