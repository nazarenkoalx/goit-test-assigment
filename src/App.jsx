import { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Loader } from "./components/Loading/Loading";

const SharedLayout = lazy(() =>
  import("./components/SharedLayout/SharedLayout")
);
const Home = lazy(() => import("./pages/Home"));
const Tweets = lazy(() => import("./pages/Tweets"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router basename="/goit-test-assigment">
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
