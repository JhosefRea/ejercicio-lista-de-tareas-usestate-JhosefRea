import { useEffect, useRef, useState } from "react";
import "../styles/todoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("useEffect TodoList (en cada renderizado)");
  }); // se ejecuta en cada renderizado del componente

  useEffect(() => {
    console.log("useEffect TodoList (solo cuando se monta)");
  }, []); // si la lista de dependencias es vacía ([]) se ejecuta solo cuando se monta el componente

  useEffect(() => {
    console.log("useEffect TodoList (completed)");
  }, [completed]); // se ejecuta solo cuando se actualiza la variable de estado "completed"

  useEffect(() => {
    console.log("useEffect TodoList (completed, todo)");
    if (todos.length > 0) {
      document.title = `Tienes ${todos.length} tareas pendientes`;
    } else {
      document.title = "No tienes tareas pendientes";
    }
  }, [todos]); // se ejecuta solo cuando se actualiza la variable de estado "completed" y "todos"

  useEffect(() => {
    if (darkMode) {
      console.log("DARK");
    } else {
      console.log("LIGHT");
    }
  }, [darkMode]);

  const handleAddTask = () => {
    // const newTodo = document.querySelector("#todo").value;
    // setTodos((prevState) => [...prevState, newTodo]);
    // document.querySelector("#todo").value = "";

    console.log("inputRef.current", inputRef.current);
    const newTodo = inputRef.current.value;
    setTodos((prevState) => [...prevState, newTodo]);
    inputRef.current.value = "";
  };

  const handleDeleteTask = (positionToDelete) => {
    const newTodos = todos.filter(
      (todo, taskPosition) => taskPosition !== positionToDelete
    );
    setTodos(newTodos);
  };

  const handleCompleteTask = (positionToComplete) => {
    const taskToComplete = todos[positionToComplete];
    handleDeleteTask(positionToComplete);
    setCompleted((prevState) => [...prevState, taskToComplete]);
  };

  const handleSetDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={handleSetDarkMode}>
        {darkMode ? "Desactivar" : "Activar"} modo oscuro
      </button>
      <h1>Lista de tareas</h1>
      <div>
        <label htmlFor="todo">Nombre de la tarea</label>
        <input type="text" id="todo" ref={inputRef} />

        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>

      <div>
        <h3>Tareas pendientes</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Eliminar</th>
              <th>Completada</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo}</td>
                <td>
                  <button onClick={() => handleDeleteTask(index)}>
                    Eliminar
                  </button>
                </td>

                <td>
                  <button onClick={() => handleCompleteTask(index)}>
                    Marcar como Completada
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Tareas completadas</h3>

        <ul>
          {completed.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
