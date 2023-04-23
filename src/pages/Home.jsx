import { useState } from "react";
function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
      <p>ti pidor</p>
    </>
  );
}

export default Home;
