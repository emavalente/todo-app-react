import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});

  return (
    <div className="container mx-auto rounded">
      <Toaster />
      <Header />
      <main className="mt-12 md:flex md:justify-around items-start">
        <Form
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
        <TodoList
          taskList={taskList}
          setTaskList={setTaskList}
          setTask={setTask}
          task={task}
        />
      </main>
      <footer className="text-center">
        <h4 className="mb-2 font-bold text-lg">TODO APP</h4>
        <div className="mb-5">
          <a href="https://linkedin.com/in/emanuel-valente" className="mx-2">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://github.com/emavalente" className="mx-2">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
        <h6 className="text-sm">&copy;2023 - Developed by Emanuel_Valente</h6>
      </footer>
    </div>
  );
}

export default App;
