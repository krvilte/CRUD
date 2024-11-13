import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);

      // Navigate Back to Login
      navigate("/login");
    } catch (error) {
      const errMessage = error.errorMessage;
      console.error("Error: ", errMessage);
    }
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold text-zinc-950">Welcome Back</h1>

      <button
        onClick={handleLogout}
        className="bg-blue-400 mt-5 px-5 py-2 rounded-full hover:bg-blue-500"
      >
        Logout
      </button>
    </main>
  );
};

export default Home;
