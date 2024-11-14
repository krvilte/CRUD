import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    return navigate("/");
  };
  return (
    <main>
      <div className="bg-slate-900 h-[100vh] flex flex-col items-center justify-center">
        <h1 className="text-center text-white text-xl">User Page</h1>
        <div className="flex mt-3">
          <button
            onClick={handleRedirect}
            className="text-gray-900 bg-white mx-auto px-5 py-3 rounded hover:bg-gray-100 focus:ring-4"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </main>
  );
};

export default User;
