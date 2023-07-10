import { useState } from "react";
import { toast } from "react-hot-toast";
import { createId } from "../helpers";

const Formulario = ({ tasklist, setTaskList }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [importance, setImportance] = useState("bg-indigo-400");
  const [dateInitiated, setDateInitiated] = useState("");
  const [dateFinished, setDateFinished] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form Validation
    if ([taskTitle, dateInitiated, dateFinished, description].includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    const objTask = {
      title: taskTitle,
      importance,
      dateInitiated,
      dateFinished,
      description,
    };
    setTaskList([...tasklist, { ...objTask, id: createId() }]);

    // Form Reset
    setTaskTitle("");
    setImportance("");
    setDateInitiated("");
    setDateFinished("");
    setDescription("");
    toast.success("Tarea agregada con exito!");
  };

  return (
    <div className="w-full md:w-2/5 mb-8">
      <h2 className="mb-2 font-black text-2xl text-center">
        Formulario de tareas
      </h2>
      <p className="mb-8 font-semibold text-center">
        Añade tus tareas y {""}
        <span className="text-purple-400">Adminístralas</span>
      </p>
      <form className="py-10 px-5 relative text-black bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-lg shadow-xl">
        {/* Task Title */}
        <div className="mb-4">
          <label
            htmlFor="task-title"
            className="mb-2 block font-semibold uppercase text-slate-50"
          >
            Nombre de Tarea
          </label>
          {/* input values must to contain the state to render it*/}
          <input
            id="task-title"
            type="text"
            placeholder="Describe aquí tu tarea"
            value={taskTitle}
            className="w-full p-2 rounded placeholder-gray-400"
            onChange={(e) => {
              {
                setTaskTitle(e.target.value);
              }
            }}
          />
        </div>
        {/* Importance */}
        <div className="mb-4">
          <label
            htmlFor="importance"
            className="mb-2 mr-4 font-semibold uppercase text-slate-50"
          >
            Importancia
          </label>
          <select
            name="important"
            id="importance"
            value={importance}
            className="w-full md:w-[calc(100%-123px)] p-2 rounded"
            onChange={(e) => {
              {
                setImportance(e.target.value);
              }
            }}
          >
            <option value="bg-indigo-400" className="font-bold text-indigo-400">
              Normal
            </option>
            <option value="bg-yellow-600" className="font-bold text-yellow-600">
              Regular
            </option>
            <option value="bg-red-600" className="font-bold text-red-600">
              Muy importante
            </option>
          </select>
        </div>
        {/* Date Beginnning */}
        <div className="mb-4">
          <label
            htmlFor="date-initiated"
            className="block mb-2 font-semibold uppercase text-slate-50"
          >
            Fecha de inicio
          </label>
          <input
            id="date-initiated"
            type="date"
            value={dateInitiated}
            className="block w-full p-2 rounded"
            onChange={(e) => {
              {
                setDateInitiated(e.target.value);
              }
            }}
          />
        </div>
        {/* Date Finished */}
        <div className="mb-4">
          <label
            htmlFor="date-finished"
            className="block mb-2 font-semibold uppercase text-slate-50"
          >
            Fecha de finalización
          </label>
          <input
            id="date-finished"
            type="date"
            className="block w-full p-2 rounded"
            value={dateFinished}
            onChange={(e) => {
              {
                setDateFinished(e.target.value);
              }
            }}
          />
        </div>
        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block mb-2 font-semibold uppercase text-slate-50"
          >
            Descripción
          </label>
          <textarea
            id="description"
            className="block w-full p-2 rounded resize-none"
            value={description}
            onChange={(e) => {
              {
                setDescription(e.target.value);
              }
            }}
          />
        </div>
        <input
          type="submit"
          value="Agregar"
          className="w-full h-16 m-1 font-bold text-center text-2xl text-slate-50 bg-purple-800 rounded hover:bg-purple-700 hover:cursor-pointer"
          onClick={handleSubmit}
        />
        <input
          type="button"
          value="Limpiar Lista"
          className="w-full h-16 m-1 font-bold text-center text-2xl text-slate-50 bg-purple-800 rounded hover:bg-purple-700 hover:cursor-pointer"
          onClick={() => {
            () => {
              console.log("Lista Eliminada!!!!");
            };
          }}
        />
      </form>
      {tasklist.length > 0 && (
        <a href="#task-list">
          <ion-icon name="arrow-down-circle-outline"></ion-icon>
        </a>
      )}
    </div>
  );
};

export default Formulario;
