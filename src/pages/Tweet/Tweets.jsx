import { useEffect, useState } from "react";
import { getUserInfo } from "../../services/serviceAPI";
import setVisibleTweets from "../../services/setVisibleTweets";
import TweetList from "../../components/TweetList/TweetList";
import {
  Container,
  LoadMoreBtn,
  StyledTitle,
} from "../../components/TweetList/TweetList.styled";
import { Loader } from "../../components/Loading/Loading";
import { useLocation } from "react-router-dom";
import { GoBackBtn } from "../../components/GoBackBtn/GoBackBtn";
import { Filter } from "../../components/Filter/Filter";
import { ErrorWrapper } from "./Tweets.styled";

function Tweets() {
  const [userArr, setUserArr] = useState([]);
  const [totalTweets, setTotalTweets] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tweetsPerPage, setTweetsPerPage] = useState(3);
  const [tweetsOnPage, setTweetsOnPage] = useState(0);
  const location = useLocation();
  const [filter, setFilter] = useState("");

  const goBackPath = location.state?.from ?? { pathname: "/" };

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

  const visibleTweets = setVisibleTweets(userArr, filter);

  return (
    <Container>
      <GoBackBtn path={goBackPath} />
      {loading && <Loader />}
      {visibleTweets.length === 0 && (
        <ErrorWrapper>
          <p>Unfortunately there is nothing to show with such filters</p>
          <p>Please, try another filter option</p>
        </ErrorWrapper>
      )}
      {error && <div> smth went wrong </div>}
      <Filter setFilter={setFilter} filterVal={filter} />
      {visibleTweets.length > 0 && (
        <>
          <StyledTitle>Tweet list</StyledTitle>

          <TweetList usersInfo={visibleTweets} />
        </>
      )}
      {totalTweets > tweetsPerPage && visibleTweets.length >= tweetsPerPage && (
        <LoadMoreBtn onClick={onLoadMoreClick}>Load More</LoadMoreBtn>
      )}
    </Container>
  );
}

export default Tweets;
