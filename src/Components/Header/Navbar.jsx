import NavLinks from "./NavLinks";

const Navbar = () => {


  return (
    <div className="navbar bg-gray-200 rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-8 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLinks></NavLinks>
          </ul>
        </div>
        <div className="md:flex justify-center items-center">
          <img
            src="https://i.ibb.co/89Br7sx/website-logo.png"
            className="h-[45px] w-[65px]"
            alt=""
          />
          <p className=" normal-case text-xl text-[#1aa7f8cc]">
            Entertainment and Media
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks></NavLinks>
        </ul>
      </div>
      <div className="navbar-end md:flex flex-col md:flex-row gap-1 md:pr-2 items-center">
        <p>zahurul</p>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <a className="btn">LogOut</a>
      </div>
    </div>
  );
};

export default Navbar;