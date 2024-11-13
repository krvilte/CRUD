import React from "react";

const User = () => {
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
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold text-zinc-950">User Page</h1>

      <Button
        onClick={handleRedirect}
        className="bg-blue-400 mt-5 px-5 py-2 rounded-full hover:bg-blue-500"
      >
        Back to Homepage
      </Button>
    </main>
  );
};

export default User;
