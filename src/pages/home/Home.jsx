import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const Home = () => {
  const { logOut } = useAuthContext();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-900 h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-center text-white text-xl">Homepage</h1>
      <button
        onClick={handleLogout}
        className="text-gray-900 bg-white mx-auto mt-3 px-5 py-3 rounded hover:bg-gray-100 focus:ring-4"
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
