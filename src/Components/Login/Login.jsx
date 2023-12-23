import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="rounded-md mx-auto mt-10 w-1/3 border-2 border-[#D0D0D0]">
      <h2 className="text-4xl font-bold mt-12 text-center">Sign Up</h2>
      <form className="card-body">
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
          <button className="btn bg-custom-color text-white">Sign Up</button>
        </div>
      </form>

      <p className="text-center font-medium mt-8 mb-10">
        Already have an account?
        <span className="text-custom-color ml-2">
          <Link to="/login">Sign In</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
