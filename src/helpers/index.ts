export const filterPosts = (
  searchTerm: string,
  posts: PostType[]
): PostType[] => {
  const filteredPosts = posts.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredPosts;
};

export const findUser = (
  userId: number,
  users: UserType[]
): UserType | undefined => {
  const foundUser = users.find((item) => item.id === userId);

  return foundUser;
};
