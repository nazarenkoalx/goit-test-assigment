import TweetListItem from "../TweetListItem/TweetListItem";
import { StyledTweetList } from "./TweetList.styled";

function TweetList({ usersInfo }) {
  return (
    <StyledTweetList>
      {usersInfo.map((userInfo) => {
        const { avatar, id, name, tweets, followers, following } = userInfo;
        return (
          <TweetListItem
            key={id}
            id={id}
            avatar={avatar}
            name={name}
            tweets={tweets}
            followers={followers}
            following={following}
          />
        );
      })}
    </StyledTweetList>
  );
}

export default TweetList;
