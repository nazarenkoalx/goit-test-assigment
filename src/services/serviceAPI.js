import axios from "axios";

axios.defaults.baseURL = "https://64431acb90738aa7c06b8288.mockapi.io/api";

export async function getUserInfo(tweetsPerPage) {
  try {
    const response = await axios.get("/users");
    const userInfo = response.data.slice(0, tweetsPerPage);
    return userInfo;
  } catch (error) {
    throw new Error(error);
  }
}

// export async function updateUsersData(id, data) {
//   try {
//     const response = await axios.put(`/user/${id}`, data);
//     const userInfo = response.data;
//     return userInfo;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
