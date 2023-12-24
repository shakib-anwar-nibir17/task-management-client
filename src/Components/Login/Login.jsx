import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { userSignIn } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hello");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Congrats",
          text: "Login Successful",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="rounded-md mx-auto mt-10 w-1/3 border-2 border-[#D0D0D0]">
      <h2 className="text-4xl font-bold mt-12 text-center">Log In</h2>
      <form onSubmit={handleLogin} className="card-body">
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
            Login
          </button>
        </div>
      </form>

      <p className="text-center font-medium mt-8 mb-10">
        Do not have an account?
        <span className="text-sky-400 ml-2">
          <Link to="/register">Register</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
