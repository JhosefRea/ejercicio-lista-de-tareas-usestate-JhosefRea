import { useState } from "react";
import "../styles/users.css";

const initialUsers = [
  { id: 1, name: "Chalo", lastname: "Salvador" },
  { id: 2, name: "María", lastname: "Morales" },
  { id: 3, name: "Andrés", lastname: "Andrade" },
];

const Users = () => {
  // const state = useState(null);
  // console.log("state", state);
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState(null);

  console.log("users", users);
  // console.log("setUsers", setUsers);

  const handleAddUser = () => {
    console.log("handleAddUser");
    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;

    if (name === "" || lastname === "") {
      // alert("Ingrese los datos");
      setError("Ingrese todos los campos.");
      return;
    }

    const regex = /[0-9]/;
    const containsNumber = regex.test(name + lastname);
    if (containsNumber) {
      setError("Los campos no pueden contener números.");
      return;
    }

    setError(null);
    const newUser = {
      id: users.length + 1,
      name,
      lastname,
    };
    // const newUsersList = [...users, newUser];
    // setUsers(newUsersList);
    setUsers((prevState) => [...prevState, newUser]);

    document.querySelector("#name").value = "";
    document.querySelector("#lastname").value = "";
  };

  return (
    <div>
      <h1>Crear nuevo usuario</h1>
      <div>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="lastname">Apellido</label>
          <input type="text" id="lastname" />
        </div>

        {error && <div className="error">{error}</div>}

        <div>
          <button onClick={handleAddUser}>Agregar usuario</button>
        </div>
      </div>
      <h1>Lista de usuarios ({users.length} usuarios)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} {user.name} {user.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
