import { useState, useEffect } from "react";


import './App.css';

function App() {

  const [students, setStudents] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:3001/students")
    .then((response) => response.json())
    .then((data) => setStudents(data));
  }, [])
    console.log(students);
  return (
    <div className="App">
      <h1>Estudiantes</h1>
      {
        students.length &&  //! <-- Validacion de que el array no este vacio     
        students.map((stud)=>{
          return(
            <div key={stud.id}>
            <h3>{stud.name}</h3>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
