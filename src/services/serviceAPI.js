import axios from "axios";

axios.defaults.baseURL = "https://64431acb90738aa7c06b8288.mockapi.io/api";

export async function getUserInfo() {
  try {
    const response = await axios.get("/user");
    const userInfo = response.data;
    return userInfo;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUsersData(id, data) {
  try {
    const response = await axios.put(`/users/${id}`, data);
    const userInfo = response.data;
    return userInfo;
  } catch (error) {
    throw new Error(error);
  }
}
