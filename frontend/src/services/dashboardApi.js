import api from "./api";

export const getDashboardData = async (userId) => {
  const response = await api.get(
    `/donor-dashboard/${userId}`
  );

  return response.data;
};