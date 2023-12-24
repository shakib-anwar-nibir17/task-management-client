import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, handleUpdateProfile } = useAuth();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("hello");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, name, password);
    createUser(email, password)
      .then((res) => {
        console.log(res);
        handleUpdateProfile(name).then((res) => {
          console.log(res);
          Swal.fire({
            title: "Congratulation",
            text: "Successful login",
            icon: "success",
          });
          navigate("/");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="rounded-md mx-auto mt-10 w-1/3 border-2 border-[#D0D0D0]">
      <h2 className="text-4xl font-bold mt-12 text-center">Register Now!!!</h2>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
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
            name="email"
            placeholder="Your email"
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
            name="password"
            placeholder="Your password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#fed766] text-black font-bold hover:bg-black hover:text-white">
            Register
          </button>
        </div>
      </form>

      <p className="text-center font-medium mt-8 mb-10">
        Already have an account?
        <span className="text-custom-color ml-2">
          <Link className="text-sky-400" to="/login">
            Log In
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
