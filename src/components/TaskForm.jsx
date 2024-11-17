import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  // Manejamos el estado del input con este useState
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  // con esta funcion se maneja el envio del input
  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title: title,
      description: description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white text-center mb-3">Añade una tarea</h1>
        {/* //Dentro de este input hay un event handler "onChange" que carga la variable title con el valor de lo que se escribe en el input */}
        <input
          className="bg-slate-200 p-3 w-full mb-2 "
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-200 p-3 w-full mb-2 "
          placeholder="Escribe una descripcion para la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-indigo-600 text-white px-3 py-1 hover:bg-indigo-800">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
