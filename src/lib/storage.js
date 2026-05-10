export const storage = {
  getToken: () => localStorage.getItem("accessToken"),

  setToken: (token) => {
    localStorage.setItem("accessToken", token);
  },

  removeToken: () => {
    localStorage.removeItem("accessToken");
  },
};
