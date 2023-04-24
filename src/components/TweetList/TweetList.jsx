import { useEffect, useState } from "react";
import TweetListItem from "../TweetListItem/TweetListItem";
import { StyledTweetList } from "./TweetList.styled";

function TweetList({ usersInfo }) {
  const [userFollow, setUserFollow] = useState(
    () => JSON.parse(window.localStorage.getItem("userFollow")) ?? []
  );

  useEffect(() => {
    window.localStorage.setItem("userFollow", JSON.stringify(userFollow));
  }, [userFollow]);

  const localFollowing = (id, data) => {
    setUserFollow((prevState) => [...prevState, { id, data }]);
  };

  return (
    <StyledTweetList>
      {usersInfo.map((userInfo) => {
        const { avatar, id, name, tweets, followers } = userInfo;
        return (
          <TweetListItem
            key={id}
            id={id}
            avatar={avatar}
            name={name}
            tweets={tweets}
            followers={followers}
            // setUserFollow={setUserFollow}
            localFollowing={localFollowing}
          />
        );
      })}
    </StyledTweetList>
  );
}

export default TweetList;
