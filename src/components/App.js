function App({ subjects, name, age, lastname, ...props }) {
  // const name = "Chalo";
  // const lastname = "Salvador";

  console.log("PROPS", props);

  // destructuring assignment
  // const { languages, other } = props;

  const arr1 = [3, 3, 3];
  const arr2 = [2, 4, 5];

  const arr3 = arr1.map((x, index) => x + arr2[index]);
  console.log("arr3", arr3);

  const hasTwo = arr1.some((x) => x === 2);
  console.log("hasTwo", hasTwo);

  const allTwo = arr1.every((x) => x === 2);
  console.log("allTwo", allTwo);

  return (
    <>
      <div className="greeting">
        Hola {name} {lastname}
      </div>

      <div className="age">Edad: {age}</div>

      <div>Subjects: </div>
      <ul>
        {subjects.map((subject) => {
          return <li>{subject}</li>;
        })}
      </ul>

      <ul>
        {arr3.map((number) => {
          return <li>{number}</li>;
        })}
      </ul>

      {hasTwo && <p>Si contiene el número 2</p>}
      {arr1[1] === 2 && <p>Si contiene el número 2</p>}

      {hasTwo ? "Si contiene el número 2" : "No contiene el 2"}
    </>
  );
}

export default App;
