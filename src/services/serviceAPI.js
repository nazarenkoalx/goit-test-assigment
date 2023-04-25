import axios from "axios";

axios.defaults.baseURL = "https://64431acb90738aa7c06b8288.mockapi.io/api";

export async function getUserInfo(tweetsPerPage, tweetsOnPage) {
  try {
    const response = await axios.get("/users");
    // const array = response.data.map((user) => {
    //   const { id, avatar, followers, tweets, name } = user;
    //   const newUser = { id, avatar, followers, tweets, name, following };
    //   return newUser;
    // });
    const userInfo = response.data.slice(tweetsOnPage, tweetsPerPage);
    const totalTweets = response.data.length;
    return { userInfo, totalTweets };
  } catch (error) {
    throw new Error(error);
  }
}

export async function putUserInfo(id, updatedData) {
  try {
    const { data } = await axios.put(`/users/${id}`, updatedData);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
