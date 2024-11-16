const ErrorPage = () => {
  return (
    <main className="bg-slate-900 h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold tracking-widest text-white">404</h1>
      <div>
        <span className="text-white text-lg">
          Oops! We can't find this page.
        </span>
      </div>
    </main>
  );
};

export default ErrorPage;
