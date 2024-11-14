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
    <div className="flex flex-col">
      <p>Home</p>
      <button
        onClick={handleLogout}
        className="bg-blue-400 mt-5 px-6 py-3 rounded-full w-28 hover:bg-blue-500"
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
