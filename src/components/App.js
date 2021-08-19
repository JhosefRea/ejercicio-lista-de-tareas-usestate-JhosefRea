import Users from "./Users";
import Counter from "./Counter";
import TodoList from "./TodoList";
import { useState } from "react";
import UserInfo from "./UserInfo";

function App({ subjects, name, age, lastname, ...props }) {
  const [showTodo, setShowTodo] = useState(true);
  // const name = "Chalo";
  // const lastname = "Salvador";

  // console.log("PROPS", props);

  // destructuring assignment
  // const { languages, other } = props;

  const arr1 = [3, 3, 3];
  const arr2 = [2, 4, 5];

  const arr3 = arr1.map((x, index) => x + arr2[index]);
  // console.log("arr3", arr3);

  const hasTwo = arr1.some((x) => x === 2);
  // console.log("hasTwo", hasTwo);

  const allTwo = arr1.every((x) => x === 2);
  // console.log("allTwo", allTwo);

  const handleToggleTodoList = () => {
    setShowTodo(!showTodo);
  };

  return (
    <>
      <UserInfo />

      <hr />

      <div className="greeting">
        Hola {name} {lastname}
      </div>

      <div className="age">Edad: {age}</div>

      <div>Subjects: </div>
      <ul>
        {subjects.map((subject, index) => {
          return <li key={index}>{subject}</li>;
        })}
      </ul>

      <ul>
        {arr3.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>

      {hasTwo && <p>Si contiene el número 2</p>}
      {arr1[1] === 2 && <p>Si contiene el número 2</p>}

      {hasTwo ? "Si contiene el número 2" : "No contiene el 2"}

      <Counter />

      <Users />

      <div>
        <button onClick={handleToggleTodoList}>
          {showTodo ? "Ocultar" : "Mostrar"} lista de tareas
        </button>
      </div>

      {showTodo && <TodoList />}
    </>
  );
}

export default App;
