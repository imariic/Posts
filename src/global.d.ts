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

  type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  };
}

export {};
