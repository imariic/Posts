import axiosInstance from "api";

const getCommentsByPostId = async (postId: number): Promise<CommentType[]> => {
  try {
    const response = await axiosInstance.get("/comments", {
      params: {
        postId,
      },
    });

    if (response) return response.data;
  } catch (e) {
    console.error(e);
  }

  return [];
};

export default {
  getCommentsByPostId,
};
