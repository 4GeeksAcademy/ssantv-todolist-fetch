import React, { useEffect, useState } from "react";
import List from "./List";
import Message from "./Message";
import "../../styles/form.css";

const Form = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);
    const [user, setUser] = useState("");
    const [userPlaceholder, setUserPlaceholder] = useState("");
    const url = "https://playground.4geeks.com/todo";
    const [error, setError] = useState("")

    useEffect(() => {
        if (user)
            getInfo();
    }, [user]); // Se ejecuta solo cuando cambia el usuario


    const getInfo = async () => {
        const response = await fetch(`${url}/users/${user}`);
        if (response.status == 404) {
            setError("notFound");
            setTimeout(() => {
                setError("");
            }, 5000)
            await fetch(`https://playground.4geeks.com/todo/users/${user}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            })
        } else {
            const data = await response.json();
            setList(data.todos);
        }
    }

    const deleteUser = async () => {
        const response = await fetch(`${url}/users/${user}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (response.ok) {
            setList([]);
            setUserPlaceholder("");
            setUser("");
            setTask("")
            setError("deleteUser");
            setTimeout(() => {
                setError("");
            }, 3000);
        }
    }

    const handleSubmit = async (e) => { // Guarda la nueva tarea
        e.preventDefault();
        if (user.length === 0) {
            setError("noUser")
            return
        } else if (task.length === 0) {
            setError("noTask")
            return
        }
        await fetch(`${url}/todos/${user}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "label": task,
                "is_done": false
            })
        })
        handleReset();
        await getInfo();

    };

    const handleChange = (e) => { // Esta no cambia, porque es para ver el cambio en el input DE LA ATREA
        const value = e.target.value;
        setTask(value);
    };

    const handleUserSubmit = (e) => { // Guardar el nombre de usuario
        e.preventDefault();
        setUser(userPlaceholder);
    };

    const handleUserChange = (e) => { // Ver el cambio en el input DEL USER
        setUserPlaceholder(e.target.value);
    };

    const handleReset = () => { // Deja en blanco el input de tareas
        setTask("");
    };

    const changeUser = () => {
        setUser("");
    };

    const deleteTask = (id) => {
        setList(prev => prev.filter(item => item.id !== id));
    };

    const updateTask = (id, updated) => {
        setList(prev =>
            prev.map(task =>
                task.id === id ? { ...task, ...updated } : task
            )
        );
    };

    return (
        <div className="card">
            {user === "" ? (
                <form className="m-2 d-flex align-items-center gap-2" onSubmit={handleUserSubmit}>
                    <input
                        value={userPlaceholder}
                        onChange={handleUserChange}
                        type="text"
                        name="user"
                        placeholder="Inserta tu nombre de usuario"
                    />
                    <button type="submit" className="btnAccept">Aceptar</button>
                </form>
            ) : (
                <div className="m-2 d-flex gap-2 align-items-center">
                    <h1 className="m-2">Hola, {user}</h1>
                    <div className="d-flex gap-2 ms-auto">
                        <button className="btnMini" onClick={changeUser}>¿No eres tú?</button>
                        <button className="btnMini" onClick={deleteUser}>Eliminar usuario</button>
                    </div>
                </div>
            )}


            <form onSubmit={handleSubmit} className="m-2 d-flex align-items-center gap-2">
                <input
                    value={task}
                    onChange={handleChange}
                    type="text"
                    name="task"
                    placeholder="Inserta una tarea"
                />
                <input type="submit" value="Enviar" className="submit" />
            </form>
            <List user={user} list={list} url={url} deleteTask={deleteTask} updateTask={updateTask} />
            <Message user={user} error={error} />
        </div>
    );
};

export default Form;
