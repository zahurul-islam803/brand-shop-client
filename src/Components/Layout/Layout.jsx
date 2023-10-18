import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const Layout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-8">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;