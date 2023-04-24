import { useEffect, useState } from "react";
import { getUserInfo } from "../services/serviceAPI";
import TweetList from "../components/TweetList/TweetList";
import {
  Container,
  LoadMoreBtn,
  StyledTitle,
} from "../components/TweetList/TweetList.styled";
import { Loader } from "../components/Loading/Loading";

function Tweets() {
  const [userArr, setUserArr] = useState(
    []
    // () => JSON.parse(window.localStorage.getItem("userArr")) ?? []
  );
  const [totalTweets, setTotalTweets] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tweetsPerPage, setTweetsPerPage] = useState(3);
  const [tweetsOnPage, setTweetsOnPage] = useState(0);

  useEffect(() => {
    setError(null);
    setLoading(true);
    getUserInfo(tweetsPerPage, tweetsOnPage)
      .then(({ userInfo, totalTweets }) => {
        if (userInfo.length === 0) {
          return alert("There are no tweets(");
        }
        setTotalTweets(totalTweets);
        setUserArr((prevUserInfo) => [...prevUserInfo, ...userInfo]);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [tweetsOnPage, tweetsPerPage]);

  useEffect(() => {
    window.localStorage.setItem("userArr", JSON.stringify(userArr));
  }, [userArr]);

  const onLoadMoreClick = () => {
    setTweetsPerPage((prevTweetsPerPage) => prevTweetsPerPage + 3);
    setTweetsOnPage((prevTweetsOnPage) => prevTweetsOnPage + 3);
  };

  return (
    <Container>
      {loading && <Loader />}
      {error && <div> smth went wrong </div>}
      {userArr.length > 0 && (
        <>
          <StyledTitle>Tweet list</StyledTitle>
          <TweetList usersInfo={userArr} setUserArr={setUserArr} />
        </>
      )}
      {userArr.length > 0 && totalTweets > tweetsPerPage && (
        <LoadMoreBtn onClick={onLoadMoreClick}>Load More</LoadMoreBtn>
      )}
    </Container>
  );
}

export default Tweets;
