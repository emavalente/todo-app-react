import { useState } from "react";

const Task = ({
  title,
  importance,
  dateInitiated,
  dateFinished,
  description,
  id,
  taskList,
  setTaskList,
  setTask,
  taskToEdit,
}) => {
  const [expanded, setExpanded] = useState(false);
  console.log(taskList);
  const deleteTask = (id) => {
    const tasksFiltered = taskList.filter((taskState) => taskState.id !== id);
    setTaskList(tasksFiltered);
  };

  const toggleTask = () => {
    if (expanded) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };
  return (
    <div
      className={`w-full p-5 mb-5  ${
        expanded ? "h-auto" : "h-[110px] xl:h-[90px] overflow-hidden"
      }  ${importance} rounded-md transition-all shadow-inner ${
        importance === "bg-red-600" || importance === "bg-indigo-600"
          ? "text-slate-50"
          : "text-black"
      }`}
    >
      <div className="flex flex-col justify-between xl:flex-row xl:items-center">
        <h3 className="flex items-center font-bold uppercase ">
          <span className="mr-2">
            {importance === "bg-indigo-600" ? (
              <ion-icon name="arrow-redo-circle-outline"></ion-icon>
            ) : importance === "bg-yellow-600" ? (
              <ion-icon name="notifications-circle-outline"></ion-icon>
            ) : importance === "bg-red-600" ? (
              <ion-icon name="alert-circle-outline"></ion-icon>
            ) : (
              ""
            )}
          </span>
          {""}
          {title}
        </h3>
        <div className="flex items-center">
          <p className="inline-block mx-2 text-sm font-bold">
            Inicio: <span className="font-semibold">{dateInitiated}</span>
          </p>
          <p className="inline-block mx-2 text-sm font-bold">
            Finalización: <span className="font-semibold">{dateFinished}</span>
          </p>
          {expanded ? (
            <ion-icon name="caret-up-outline" onClick={toggleTask}></ion-icon>
          ) : (
            <ion-icon name="caret-down-outline" onClick={toggleTask}></ion-icon>
          )}
        </div>
      </div>

      <p className="text-center my-5">{description}</p>

      <div className="mt-5 flex justify-end">
        <button
          disabled={taskToEdit.id ? true : false}
          className="px-4 py-1 mx-2 text-slate-50 bg-purple-600 rounded hover:bg-purple-500 shadow-inner"
          onClick={() => {
            setTask({
              title,
              importance,
              dateInitiated,
              dateFinished,
              description,
              id,
            });
          }}
        >
          Editar
        </button>
        <button
          disabled={taskToEdit.id ? true : false}
          className="px-4 py-1 mx-2 text-slate-50 bg-red-700 rounded hover:bg-red-500 shadow-inner"
          onClick={() => deleteTask(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Task;
