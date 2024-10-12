import Todo from "./Todo.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-500 p-4">
      <h1 className="text-4xl bg-red-600 text-white font-bold py-2 px-6 rounded-md shadow-md mb-6">
        TODO APP
      </h1>
      <Todo />
    </div>
  );
}
