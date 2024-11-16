import React, { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState({
    todo: "",
    doing: "",
    done: "",
  });

  const handleSubmit = (e, status) => {
    e.preventDefault();
    const value = inputValue[status];

    const todo = {
      title: value,
      status: status,
      id: Date.now(),
    };

    setTodos((prev) => [...prev, todo]);
    setInputValue((prev) => ({ ...prev, [status]: "" })); // Reset the input field
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value })); // Update specific input field
  };

  return (
    <main className="lg:container m-auto">
      <h1 className="text-center text-3xl font-bold my-5">Kanban Taskboard</h1>
      {/* Task Board */}
      <div className="flex justify-center">
        {/* Todos Tasks */}
        <div className="w-1/3 mx-1 p-2 rounded">
          <h2 className="bg-gray-600 p-2 mb-2 text-center text-xl select-none font-semibold rounded">
            Todo
          </h2>

          {todos
            .filter((todo) => todo.status === "todo")
            .map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="flex justify-between p-2 mb-1 hover:bg-slate-800 text-white font-sans text-base cursor-move rounded"
                >
                  <span className="select-none">{todo.title}</span>
                  <div className="flex self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 mx-2 hover:text-green-500 hover:cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 mx-2 hover:text-red-500 hover:cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}

          <form onSubmit={(e) => handleSubmit(e, "todo")}>
            <input
              type="text"
              name="todo"
              value={inputValue.todo}
              onChange={handleChange}
              className="bg-slate-800 text-sm py-2 px-4 mt-2 w-full border border-slate-700 focus:outline-none rounded"
              placeholder="+ Add task..."
            />
          </form>
        </div>

        {/* Doing Tasks */}
        <div className="w-1/3 mx-1 p-2 rounded border border-slate-700 shadow-sm">
          <h2 className="bg-blue-600 p-2 mb-2 text-center text-xl select-none font-semibold rounded">
            Doing
          </h2>

          {todos
            .filter((todo) => todo.status === "doing")
            .map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="flex justify-between p-2 mb-1 hover:bg-slate-800 text-white font-sans text-base cursor-move rounded"
                >
                  <span className="select-none">{todo.title}</span>
                  <div className="flex self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 mx-2 hover:text-green-500 hover:cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 mx-2 hover:text-red-500 hover:cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}

          <form onSubmit={(e) => handleSubmit(e, "doing")}>
            <input
              type="text"
              name="doing"
              value={inputValue.doing}
              onChange={handleChange}
              className="bg-slate-800 text-sm py-2 px-4 mt-2 w-full border border-slate-700 focus:outline-none rounded"
              placeholder="+ Add task..."
            />
          </form>
        </div>

        {/* Done Tasks */}
        <div className="w-1/3 mx-1 p-2 rounded">
          <h2 className="bg-green-600 p-2 mb-2 text-center text-xl select-none font-semibold rounded">
            Done
          </h2>

          {todos
            .filter((todo) => todo.status === "done")
            .map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="flex justify-between p-2 mb-1 hover:bg-slate-800 text-white font-sans text-base cursor-move rounded"
                >
                  <span className="select-none">{todo.title}</span>
                  <div className="flex self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 mx-2 hover:text-green-500 hover:cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 mx-2 hover:text-red-500 hover:cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}

          <form onSubmit={(e) => handleSubmit(e, "done")}>
            <input
              type="text"
              name="done"
              value={inputValue.done}
              onChange={handleChange}
              className="bg-slate-800 text-sm py-2 px-4 mt-2 w-full border border-slate-700 focus:outline-none rounded"
              placeholder="+ Add task..."
            />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
