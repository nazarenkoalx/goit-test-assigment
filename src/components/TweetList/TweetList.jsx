import TweetListItem from "../TweetListItem/TweetListItem";
import { StyledTweetList } from "./TweetList.styled";
import PropTypes from "prop-types";

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

TweetList.propTypes = {
  userInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      following: PropTypes.bool.isRequired,
    })
  ),
};

export default TweetList;
