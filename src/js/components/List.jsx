import React from "react";
import "../../styles/list.css";

const List = ({ user, list, url, deleteTask, updateTask }) => {

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

  const handleEdit = (e, id) => {
    console.log("Estás editando la", id);
    //Añadir un modal que tenga un input y un checkbox
  };

  const pending = list.filter(tasks => !tasks.is_done).length;

  return (
    <>
      <ul>
        {user === "" ? (
          <p className="m-2">Inserta un usuario</p>
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
                onClick={(e) => handleEdit(e, el.id)}
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
          <p className="m-2">No hay tareas guardadas</p>
        )}
      </ul>

      <div className="remainingTasks">
        {pending} tareas pendientes
      </div>
    </>
  );
};

export default List;
