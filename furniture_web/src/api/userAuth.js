import axiosPublic from "./axiosPublic";

export const registerUser = async ({ name, email, password }) => {
  return axiosPublic.post("accounts/register/", {
    username: name,
    email,
    password,
  });
};

export const loginUser = async ({ email, password }) => {
  return axiosPublic.post("accounts/login/", {
    email,
    password,
  });
};