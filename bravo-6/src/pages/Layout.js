import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/Dictionary"></Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
