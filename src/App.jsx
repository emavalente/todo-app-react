import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [tasklist, setTaskList] = useState([]);

  return (
    <div className="container mx-auto rounded">
      <Toaster />
      <Header />
      <main className="mt-12 md:flex md:justify-around items-start">
        <Form tasklist={tasklist} setTaskList={setTaskList} />
        <TodoList tasklist={tasklist} />
      </main>
    </div>
  );
}

export default App;
