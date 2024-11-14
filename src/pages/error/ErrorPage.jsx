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
  }
  return (
    <main className="bg-slate-900 h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold tracking-widest text-white">404</h1>
      <span className="text-white">Oops! We can't find this page.</span>
      <button
        onClick={handleRedirect}
        type="button"
        className="text-gray-900 bg-white mx-auto mt-4 px-5 py-3 rounded hover:bg-gray-100 focus:ring-4"
      >
        Back to Homepage
      </button>
    </main>
  );
};

export default ErrorPage;
