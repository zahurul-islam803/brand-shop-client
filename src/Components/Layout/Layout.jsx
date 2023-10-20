
import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../../Pages/Footer";
const Layout = () => {

  return (
      <div className="max-w-screen-2xl mx-auto my-8 px-2">
        <div className="mb-3">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <div className="my-14">
          <Footer></Footer>
        </div>
      </div>
  );
};

export default Layout;