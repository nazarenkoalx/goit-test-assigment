import { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Loader } from "./components/Loading/Loading";

const SharedLayout = lazy(() =>
  import("./components/SharedLayout/SharedLayout")
);
const Home = lazy(() => import("./pages/Home/Home"));
const Tweets = lazy(() => import("./pages/Tweet/Tweets"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<Tweets />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
