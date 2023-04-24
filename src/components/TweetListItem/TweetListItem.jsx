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

function TweetListItem({
  id,
  avatar,
  name,
  tweets,
  followers,
  following,
  setUserArr,
}) {
  const [isFollowing, setIsFollowing] = useState(() =>
    JSON.parse(localStorage.getItem(`${id}`) || following)
  );
  const [newFollowers, setNewFollowers] = useState(followers);

  const follows = newFollowers > 0 ? newFollowers : "no";

  let splitTweets;
  if (tweets === 0) {
    splitTweets = "no";
  }
  if (tweets > 0) {
    splitTweets = tweets;
  }
  if (tweets > 10000) {
    const firstPart = tweets.toString().slice(0, 2);
    const secondPart = tweets.toString().slice(2, 5);
    splitTweets = firstPart + "," + secondPart;
  }

  if (tweets > 100000) {
    const firstPart = tweets.toString().slice(0, 3);
    const secondPart = tweets.toString().slice(3, 6);
    splitTweets = firstPart + "," + secondPart;
  }

  const onFollowBtnClick = () => {
    if (!isFollowing) {
      setIsFollowing(true);
      setNewFollowers((prevFollowers) => prevFollowers + 1);
      window.localStorage.setItem(`${id}`, true);
    } else {
      setIsFollowing(false);
      setNewFollowers((prevFollowers) => prevFollowers - 1);
      window.localStorage.setItem(`${id}`, false);
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
        <TextParagraph>{splitTweets} tweets</TextParagraph>
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
