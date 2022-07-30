import axiosInstance from "api";

const getUserById = async (userId: number): Promise<UserType[]> => {
  try {
    const response = await axiosInstance.get(`/users/${userId}`);

    if (response) return response.data;
  } catch (e) {
    console.error(e);
  }

  return [];
};

const getAllUsers = async (): Promise<UserType[]> => {
  try {
    const response = await axiosInstance.get("/users");

    if (response) return response.data;
  } catch (e) {
    console.error(e);
  }

  return [];
};

export default { getUserById, getAllUsers };
