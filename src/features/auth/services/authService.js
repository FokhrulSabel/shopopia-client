export const loginAPI = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: 1,
          name: "John Doe",
          email,
        },

        token: "fake-jwt-token",
      });
    }, 1000);
  });
};

export const registerAPI = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: Date.now(),
          ...data,
        },

        token: "fake-jwt-token",
      });
    }, 1000);
  });
};
