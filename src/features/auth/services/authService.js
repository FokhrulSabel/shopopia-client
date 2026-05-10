import axiosInstance from "@/lib/axios";


export const loginAPI = async (payload) => {
  const { data } = await axiosInstance.post("/auth/login", payload);

  return data;
};

export const registerAPI = async (payload) => {
  const { data } = await axiosInstance.post("/auth/register", payload);

  return data;
};

export const getProfileAPI = async () => {
  const { data } = await axiosInstance.get("/auth/profile");

  return data;
};
