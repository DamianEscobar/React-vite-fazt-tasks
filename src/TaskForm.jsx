import React, { useState } from "react";

function TaskForm({ createTask }) {
  // Manejamos el estado del input con este useState
  const [title, setTitle] = useState("");

  // con esta funcion se maneja el envio del input
  const handleSubmit = (e) => {
    e.preventDefault();
    
    createTask(title)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* //Dentro de este input hay un event handler "onChange" que carga la variable title con el valor de lo que se escribe en el input */}
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
