import TweetListItem from "../TweetListItem/TweetListItem";
import { StyledTweetList } from "./TweetList.styled";

function TweetList({ usersInfo, setUserArr }) {
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
            setUserArr={setUserArr}
          />
        );
      })}
    </StyledTweetList>
  );
}

export default TweetList;
