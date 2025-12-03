import React, { useState } from "react";
import "../../styles/list.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const List = ({ user, list, url, deleteTask, updateTask }) => {
  const MySwal = withReactContent(Swal);


  const handleToggleDone = async (id, bool) => {
    const response = await fetch(`${url}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_done: !bool })
    });

    const updated = await response.json();
    updateTask(id, { is_done: updated.is_done });
  };

 
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    await fetch(`${url}/todos/${id}`, { method: "DELETE" });
    deleteTask(id);
  };

  const showSwal = async (e, task) => {
    e.stopPropagation();

    const { value: newValue } = await MySwal.fire({
      title: <i>Editar tarea</i>,
      input: "text",
      inputValue: task.label,
      showCancelButton: true,
      confirmButtonText: "Guardar",
    });

    if (newValue && newValue.trim() !== "") {
      handleEdit(task.id, newValue);
    }
  };

  const handleEdit = async (id, newLabel) => {
    const response = await fetch(`${url}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label: newLabel })
    });

    const updated = await response.json();
    updateTask(id, { label: updated.label });
  };

  const pending = list.filter(tasks => !tasks.is_done).length;

  return (
    <>
      <ul>
        {user === "" ? (
          <p className="m-2 fs-6">No se pueden mostrar tareas sin un usuario</p>
        ) : list && list.length > 0 ? (
          list.map((el) => (
            <li
              key={el.id}
              onClick={() => handleToggleDone(el.id, el.is_done)}
              className="mb-2 d-flex justify-content-between"
            >
              <span className={el.is_done ? "done" : ""}>
                {el.label}
              </span>

              <button
                className="editButton buttonLi"
                onClick={(e) => showSwal(e, el)}
              >
                Editar
              </button>

              <button
                className="deleteButton buttonLi"
                onClick={(e) => handleDelete(e, el.id)}
              >
                Borrar
              </button>
            </li>
          ))
        ) : (
          <p className="m-2 fs-6">No hay tareas guardadas</p>
        )}
      </ul>

      <div className="remainingTasks">
        {pending == 1 ? "1 tarea pendiente" : pending == 0 ? "No hay tareas pendientes" : `${pending} tareas pendientes`}
      </div>
    </>
  );
};

export default List;
