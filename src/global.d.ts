declare global {
  type PostType = {
    body: string;
    id: number;
    title: string;
    userId: number;
  };

  type CommentType = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  };
}

export {};
