export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const clearAccessToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.clear();
};

export const setAccessToken = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

export const isLoggedIn = () => {
  const accessToken = getAccessToken();
  return !!accessToken;
};
