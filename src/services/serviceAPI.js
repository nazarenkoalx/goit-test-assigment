import axios from "axios";

axios.defaults.baseURL = "https://64431acb90738aa7c06b8288.mockapi.io/api";

export async function getUserInfo(tweetsPerPage, tweetsOnPage) {
  try {
    const response = await axios.get("/users");
    const array = response.data.map((user) => {
      const { id, avatar, followers, tweets, name } = user;
      const newUser = { id, avatar, followers, tweets, name, following: false };
      return newUser;
    });
    const userInfo = array.slice(tweetsOnPage, tweetsPerPage);
    const totalTweets = response.data.length;
    return { userInfo, totalTweets };
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
