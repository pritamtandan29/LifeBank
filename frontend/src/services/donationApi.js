import api from "./api";

export const getDonationsByDonor = async (donorId) => {
  const response = await api.get(
    `/donations/${donorId}`
  );

  return response.data;
};