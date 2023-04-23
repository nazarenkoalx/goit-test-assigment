import TweetListItem from "../TweetListItem/TweetListItem";

function TweetList({ usersInfo }) {
  console.log(usersInfo);
  return (
    <ul>
      {usersInfo.map((userInfo) => {
        const { avatar, id, user, tweets, followers } = userInfo;
        return (
          <TweetListItem
            key={id}
            avatar={avatar}
            name={user}
            tweets={tweets}
            followers={followers}
          />
        );
      })}
    </ul>
  );
}

export default TweetList;
