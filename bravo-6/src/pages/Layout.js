import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Link to="/"></Link>

      <Link to="/Dictionary"></Link>

      <Outlet />
    </>
  );
};
export default Layout;
