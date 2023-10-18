import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Registration = () => {
  const {createUser, handleUpdateProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegistration = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

   
     if (
       !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)
     ) {
       Swal.fire({
         position: "top-end",
         icon: "error",
         title: "Password should be at least 6 character and 1 uppercase 1 special character",
         showConfirmButton: false,
         timer: 1500,
       });
       return;
     }

    // user registration
    createUser(email, password)
    .then(() =>{
      handleUpdateProfile(name, photo).then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      });
    })
    .catch(err =>{
      toast.error(err.message);
    })
    e.target.reset()
  

  }
  return (
    <div className="hero min-h-screen bg-base-200 rounded-xl">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration now!</h1>
        </div>
        <div className="card flex-shrink-0 px-[30px] pb-8 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Your Photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
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
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Registration
              </button>
            </div>
          </form>
          <p>
            Already have an account?{" "}
            <Link to={`/login`} className="text-amber-600">
              Please login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;