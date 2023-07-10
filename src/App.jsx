import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="container mx-auto rounded">
      <Toaster />
      <Header />
      <main className="mt-12 md:flex md:justify-around items-start">
        <Form taskList={taskList} setTaskList={setTaskList} />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
      </main>
    </div>
  );
}

export default App;
