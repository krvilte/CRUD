import { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../config/firebase";

const ErrorPage = () => {
  const [redirect, setRedirect] = useState(false);

  const handleRedirect = () => {
    const authenticated = auth?.currentUser;
    if (authenticated) {
      setRedirect(true);
    } else {
      setRedirect(false);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/login" />;
  }
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold tracking-widest text-zinc-950">
        404
      </h1>
      <span>Oops! We can't find this page.</span>
      <button
        onClick={handleRedirect}
        className="bg-blue-400 mt-5 px-6 py-3 rounded-full hover:bg-blue-500"
      >
        Go back to homepage
      </button>
    </main>
  );
};

export default ErrorPage;
