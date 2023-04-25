export default function setVisibleTweets(tweetArr, filter) {
  switch (filter) {
    case "following":
      return tweetArr.filter((user) => user.following === true);
    case "follow":
      return tweetArr.filter((user) => user.following === false);
    default:
      return tweetArr;
  }
}
