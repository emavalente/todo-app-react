import Task from "./Task";
const TodoList = ({ taskList, setTaskList }) => {
  return (
    <div className="w-full mb-8 md:w-3/5 md:ml-10">
      <h2 id="task-list" className="mb-16 font-black text-2xl text-center">
        Listado de tareas
      </h2>
      <div className="p-8 px-5 text-black bg-slate-50 rounded-md">
        {taskList.length > 0 ? (
          taskList.map((task) => (
            <Task
              key={task.id}
              {...task}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))
        ) : (
          <p className="text-center">No existen tareas agregadas</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
