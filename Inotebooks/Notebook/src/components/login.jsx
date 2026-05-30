import { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import Alert from "./Alert";
export default function Login() {
  let navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailid: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      setAlert({
        type: "success",
        message: "Login Successfully",
      });

      setTimeout(() => {
        setAlert(null);
      }, 3000);
      navigate("/");
      localStorage.setItem("token", json.authToken);

      // red
    } else {
      setAlert({
        type: "error",
        message: "Invalid Credentials",
      });

      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }

    console.log(json);

    // API Call Here
    // loginUser(credentials.email, credentials.password)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      {alert && <Alert type={alert.type} message={alert.message} />}
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-zinc-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-yellow-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-zinc-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition"
          >
            Login
          </button>
          <div className="mt-6 text-center">
            <p className="text-zinc-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-yellow-400 font-semibold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
