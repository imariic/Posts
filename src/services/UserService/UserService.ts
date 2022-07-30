import axiosInstance from "api";

const getUserById = async (userId: number): Promise<UserType[]> => {
  const response = await axiosInstance.get(`/users/${userId}`);

  if (response) return response.data;

  return [];
};

const getAllUsers = async (): Promise<UserType[]> => {
  const response = await axiosInstance.get("/users");

  if (response) return response.data;

  return [];
};

export default { getUserById, getAllUsers };
