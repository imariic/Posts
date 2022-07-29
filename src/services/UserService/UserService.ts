import axiosInstance from "api";

const getUserById = async (userId: number) => {
  const response = await axiosInstance.get(`/users/${userId}`);

  if (response) return response.data;

  return [];
};

export default { getUserById };
