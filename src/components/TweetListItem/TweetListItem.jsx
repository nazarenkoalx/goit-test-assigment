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

function TweetListItem({ avatar, name, tweets, followers }) {
  const [isFollowing, setIsFollowing] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const follows = followers > 0 ? followers : "no";

  // updateUsersData(id, data);

  return (
    <StyledTweetListItem>
      <TopLogo src={goitLogo} />
      <TopImage src={backgroundimg} alt="non content" />
      <AvatarLine src={line} alt="line" />
      <AvatarCircle src={circle} alt="circle" />
      <AvatarImage src={avatar} width="30px" alt={name} />
      <TextWrapper>
        <TextParagraph>{tweets} tweets</TextParagraph>
        <TextParagraph>{follows} followers</TextParagraph>
      </TextWrapper>
      <FollowBtn type="button">
        {isFollowing ? "Following" : "Follow"}
      </FollowBtn>
    </StyledTweetListItem>
  );
}

export default TweetListItem;
