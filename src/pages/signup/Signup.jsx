import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, googleSignIn } = useAuthContext();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      signUp(email, password);
      navigate("/");
      console.log(user);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      googleSignIn();
      navigate("/");
      console.log(user);
    } catch (error) {
      console.error("Google Sign-In Error: ", error); //
    }
  };

  return (
    <main className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center">Sign up</h2>
        <form className="mt-4" onSubmit={handleSignUp}>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={handleGoogleSignUp}
          className="mt-6 w-full bg-gray-600 text-white font-semibold py-2 rounded-md hover:bg-gray-700"
        >
          Continue with google
        </button>

        <span
          onClick={() => navigate("/login")}
          className="cursor-pointer  mx-auto my-3 block text-center hover:text-red-600"
        >
          Login
        </span>
      </div>
    </main>
  );
};

export default Login;
