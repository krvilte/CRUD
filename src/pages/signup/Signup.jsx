import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, googleSignIn } = useAuthContext();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error: ", error); //
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-gray-700 font-bold text-center">
          Sign up
        </h2>
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
              className="mt-1 block w-full border text-gray-700 border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4 text-gray-700">
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
              className="mt-1 block w-full border text-gray-700 border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-0"
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
          className="mt-6 w-full bg-gray-200 text-gray-900 font-semibold py-2 rounded-md hover:bg-gray-300"
        >
          Continue with google
        </button>

        <div className="flex gap-1 justify-center mt-5 text-sm text-gray-700">
          <span>Already have an account?</span>
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer font-semibold hover:text-blue-600"
          >
            Login
          </span>
        </div>
      </div>
    </main>
  );
};

export default Login;
