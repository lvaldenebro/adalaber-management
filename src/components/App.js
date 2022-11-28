// Fichero src/components/App.js
import '../styles/App.css';
import {useState} from 'react';
import adalabers from "../data/adalabers.json";

function App() {
  const [data, setData] = useState(adalabers.results); //be careful with the given structure, this is an object with an array with an object

  const printData = data.map((eachAdalaber, index) => {
    return (
      <tr key={index}>
        <td>{eachAdalaber.name}</td>
        <td>{eachAdalaber.counselor}</td>
        <td>{eachAdalaber.speciality}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Adalabers</h1>
      <form>
        <label className="searchNameLabel" htmlFor="searchName">Nombre:</label>
        <input
              className="searchName"
              type="search"
              name="searchName"
              placeholder="Ej: MariCarmen"
            />
        <label className="searchTeacherLabel" htmlFor="searchTeacher">Escoge una tutora:</label>
        <select
              className="searchTeacher"
              type="search"
              name="searchTeacher"
              placeholder="Ej: MariCarmen">
          <option value="dayana">Dayana</option>
          <option value="yanelis">Yanelis</option>
          <option value="ivan">Iván</option>
        </select>
      </form>

      <table className="table">
        <thead><tr>
          <th>Nombre</th>
          <th>Tutora</th>
          <th>Especialidad</th>
        </tr></thead>

        <tbody>{printData}</tbody>
      </table>

      <form>
        <h2>Añadir una Adalaber</h2>
        <label className="addNameLabel" htmlFor="addName">Nombre:</label>
        <input
              className="addName"
              type="text"
              name="addName"
            />
        <label className="addTeacherLabel" htmlFor="addTeacher">Tutora:</label>
        <input
              className="addTeacher"
              type="text"
              name="addTeacher"
            />
        <label className="addSpecialityLabel" htmlFor="addSpeciality">Especialidad:</label>
        <input
              className="addSpeciality"
              type="text"
              name="addSpeciality"
            />
        <input
            type="submit"
            value="Añadir una nueva Adalaber"
          />
      </form>

    </div>
  );
}

export default App;