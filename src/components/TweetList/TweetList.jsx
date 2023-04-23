import TweetListItem from "../TweetListItem/TweetListItem";
import { StyledTweetList } from "./TweetList.styled";

function TweetList({ usersInfo }) {
  return (
    <StyledTweetList>
      {usersInfo.map((userInfo) => {
        const { avatar, id, name, tweets, followers } = userInfo;
        return (
          <TweetListItem
            key={id}
            avatar={avatar}
            name={name}
            tweets={tweets}
            followers={followers}
          />
        );
      })}
    </StyledTweetList>
  );
}

export default TweetList;
