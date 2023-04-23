import { StyledTweetListItem } from "./TweetListItem.styled";

function TweetListItem({ avatar, name, tweets, followers }) {
  return (
    <StyledTweetListItem>
      <use>
        <svg></svg>
      </use>
      <p>{tweets} tweets</p>
      <img src={avatar} width="30px" alt={name} />
      <p>{followers} followers</p>
    </StyledTweetListItem>
  );
}

export default TweetListItem;
