import { useState } from "react";
import { Button } from "./Button";

const TodoApp = () => {
  // const today = new Date();
  // const tanggal = today.getDate();
  // const bulan = today.getMonth();
  // const tahun = today.getFullYear();

  const [tasks, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  console.log(taskInput);

  const handleAddTask = () => {

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };

    setTask([...tasks, newTask]);
    setTaskInput("");
  };

  const handleCompleted = (taskId) => {
    setTask(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeletedList = (taskId) => {
    setTask(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="w-full lg:w-xl mx-auto p-7 bg-zinc-100 rounded-xl text-zinc-900">
      <div className="mb-5 flex items-center gap-5">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Input Your Task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="p-2 border rounded w-[80%]"
        />
        <Button color={"bg-emerald-500"} onClick={handleAddTask}>
          Add Task
        </Button>
      </div>

      <table className="w-full border-separate border-2 table-fixed text-center p-5 rounded">
        <thead className="font-semibold">
          <tr>
            <td>Tugas</td>
            <td>Complete</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td
                  className={task.completed ? "line-through" : "no-underline"}
                >
                  {task.text}
                </td>
                <td>
                  {task.completed ? (
                    <Button
                      onClick={() => handleCompleted(task.id)}
                      color={"bg-red-500"}
                    >
                      Uncompleted
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleCompleted(task.id)}
                      color={"bg-green-500"}
                    >
                      Completed
                    </Button>
                  )}
                </td>
                <td>
                  <Button
                    color={"bg-red-500"}
                    onClick={() => handleDeletedList(task.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoApp;
