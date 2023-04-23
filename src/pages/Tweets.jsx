import { useEffect, useState } from "react";
import { getUserInfo } from "../services/serviceAPI";
import { Loader } from "../components/Loading/Loading";
import TweetList from "../components/TweetList/TweetList";

function Tweets() {
  const [userArr, setUserArr] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUserArr([]);
    setError("");
    setLoading(true);
    getUserInfo()
      .then((userInfo) => {
        if (userInfo.length === 0) {
          return alert("There are no tweets(");
        }

        setUserArr(userInfo);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
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
    </main>
  );
}

export default Tweets;
