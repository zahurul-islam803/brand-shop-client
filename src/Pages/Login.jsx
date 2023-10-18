import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";

const Login = () => {
   const { signIn, googleLogin } = useContext(AuthContext);
   const navigate = useNavigate();
   const handleToSignIn = (e) => {
     e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;

     // sign in
     signIn(email, password)
       .then(() => {
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "SignIn successfully",
           showConfirmButton: false,
           timer: 1500,
         });
         navigate("/");
       })
       .catch(() => {
         Swal.fire({
           position: "top-end",
           icon: "error",
           title: "Email or password does not match",
           showConfirmButton: false,
           timer: 1500,
         });
       });
     e.target.reset();
   };
   const handleGoogleLogin = () => {
     googleLogin()
       .then(() => {
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "SignIn successfully",
           showConfirmButton: false,
           timer: 1500,
         });
         navigate("/");
       })
       .catch((err) => {
         Swal.fire({
           position: "top-end",
           icon: "error",
           title: err.message,
           showConfirmButton: false,
           timer: 1500,
         });
       });
   };
  return (
    <div className="hero min-h-screen bg-base-200 rounded-xl">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 px-[30px] pb-8 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleToSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <div
              onClick={handleGoogleLogin}
              className="flex justify-center items-center gap-2 border rounded-lg"
            >
              <FcGoogle className="text-3xl cursor-pointer"></FcGoogle>
              <button>Login with google</button>
            </div>
          </form>
          <p>
            New Here?{" "}
            <Link to={`/registration`} className="text-amber-600">
              Please Registration
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;