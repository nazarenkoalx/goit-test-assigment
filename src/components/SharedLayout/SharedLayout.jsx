import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
function SharedLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default SharedLayout;
