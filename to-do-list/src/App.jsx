import TodoApp from "./TodoApp";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:p-10">
        <h1 className="text-4xl text-center font-bold mb-10">
          TodoList App @mfaskdr10
        </h1>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
