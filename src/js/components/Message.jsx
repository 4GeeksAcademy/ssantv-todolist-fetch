import React from "react";
import "../../styles/message.css";

const Message = ({ error, user }) => {

    if (error === "notFound") {
        return (
            <div className="alert alert-warning fs-6" role="alert">
                El usuario {user} se ha creado al no encontrar uno con ese nombre.
            </div>
        );
    }else if (error === "deleteUser") {
        return (
            <div className="alert alert-danger fs-6" role="alert">
                Usuario {user} eliminado.
            </div>
        );
    }else if (error === "noUser") {
        return (
            <div className="alert alert-danger fs-6" role="alert">
                Debes introducir un nombre de usuario.
            </div>
        );
    }else if (error === "noTask") {
        return (
            <div className="alert alert-danger fs-6" role="alert">
                Debes introducir una tarea.
            </div>
        );
    }

    return null; // Nada si no hay error
};

export default Message;
