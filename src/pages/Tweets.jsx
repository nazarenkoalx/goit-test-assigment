import { useEffect, useState } from "react";
import { getUserInfo } from "../services/serviceAPI";
import TweetList from "../components/TweetList/TweetList";
import { LoadMoreBtn } from "../components/TweetList/TweetList.styled";
import { Loader } from "../components/Loading/Loading";

function Tweets() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userArr, setUserArr] = useState([]);
  const [tweetsPerPage, setTweetsPerPage] = useState(3);

  useEffect(() => {
    setUserArr([]);
    setError("");
    setLoading(true);
    getUserInfo(tweetsPerPage)
      .then((userInfo) => {
        if (userInfo.length === 0) {
          return alert("There are no tweets(");
        }

        setUserArr(userInfo);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [tweetsPerPage]);

  const onLoadMoreClick = () => {
    setTweetsPerPage((prevTweetsPerPage) => prevTweetsPerPage + 3);
  };

  return (
    <main>
      {loading && <Loader />}
      {error && <div> smth went wrong </div>}
      {userArr.length > 0 && (
        <>
          <h2>Tweet list</h2>
          <TweetList usersInfo={userArr} />
        </>
      )}
      {userArr.length > 0 && userArr.length === tweetsPerPage && (
        <LoadMoreBtn onClick={onLoadMoreClick}>Load More</LoadMoreBtn>
      )}
    </main>
  );
}

export default Tweets;
