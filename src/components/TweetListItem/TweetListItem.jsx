import { useState } from "react";
import {
  TopImage,
  StyledTweetListItem,
  TopLogo,
  AvatarLine,
  AvatarCircle,
  AvatarImage,
  TextParagraph,
  TextWrapper,
  FollowBtn,
} from "./TweetListItem.styled";
import goitLogo from "../../images/goitLogo.svg";
import backgroundimg from "../../images/backgroundTweet.png";
import line from "../../images/line.png";
import circle from "../../images/ellipse@2x.png";

function TweetListItem({ id, avatar, name, tweets, followers, following }) {
  const [isFollowing, setIsFollowing] = useState(() =>
    JSON.parse(localStorage.getItem(`${id}`) || following)
  );
  const [newFollowers, setNewFollowers] = useState(followers);

  const follows = newFollowers > 0 ? newFollowers : "no";

  let sliceTweets;
  if (tweets === 0) {
    sliceTweets = "no";
  }
  if (tweets > 0) {
    sliceTweets = tweets;
  }
  if (tweets > 10000) {
    const firstPart = tweets.toString().slice(0, 2);
    const secondPart = tweets.toString().slice(2, 5);
    sliceTweets = firstPart + "," + secondPart;
  }

  if (tweets > 100000) {
    const firstPart = tweets.toString().slice(0, 3);
    const secondPart = tweets.toString().slice(3, 6);
    sliceTweets = firstPart + "," + secondPart;
  }

  const setLocalStorage = (id, bool) => {
    window.localStorage.setItem(`${id}`, bool);
  };

  const onFollowBtnClick = () => {
    if (!isFollowing) {
      setIsFollowing(true);
      setNewFollowers((prevFollowers) => prevFollowers + 1);
      setLocalStorage(id, true);
    } else {
      setIsFollowing(false);
      setNewFollowers((prevFollowers) => prevFollowers - 1);
      setLocalStorage(id, false);
    }
  };

  return (
    <StyledTweetListItem>
      <TopLogo src={goitLogo} />
      <TopImage src={backgroundimg} alt="non content" />
      <AvatarLine src={line} alt="line" />
      <AvatarCircle src={circle} alt="circle" />
      <AvatarImage src={avatar} width="30px" alt={name} />
      <TextWrapper>
        <TextParagraph>{sliceTweets} tweets</TextParagraph>
        <TextParagraph>{follows} followers</TextParagraph>
      </TextWrapper>
      <FollowBtn
        type="button"
        className={isFollowing ? "active" : "disabled"}
        onClick={() => onFollowBtnClick()}
      >
        {isFollowing ? "Following" : "Follow"}
      </FollowBtn>
    </StyledTweetListItem>
  );
}

export default TweetListItem;
