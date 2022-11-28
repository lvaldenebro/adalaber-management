// Fichero src/components/App.js
import '../styles/App.css';
import {useState} from 'react';
import adalabers from "../data/adalabers.json";

function App() {
  const [data, setData] = useState(adalabers.results); //be careful with the given structure, this is an object with an array with an object
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
    });

  const printData = data.map((eachAdalaber, id) => {
    return (
      <tr key={id}>
        <td>{eachAdalaber.name}</td>
        <td>{eachAdalaber.counselor}</td>
        <td>{eachAdalaber.speciality}</td>
      </tr>
    );
  });

  const handleNewAdalaber = (e) => {
    setNewAdalaber({...newAdalaber, [e.target.id]: e.target.value}); //define an id into the input so it is unique into the form and the target is clear!
  }
  const handleAddNewAdalaber = (e) => {
    e.preventDefault();
    setData([...data, newAdalaber]); //////OJOOOOO
    setNewAdalaber({
      name: '',
      counselor: '',
      speciality: '',
      });
  }

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
        <label className="addNameLabel" htmlFor="name">Nombre:</label>
        <input
              className="name"
              type="text"
              name="name"
              id="name"
              onChange={handleNewAdalaber}
              value={newAdalaber.name}
            />
        <label className="addTeacherLabel" htmlFor="counselor">Tutora:</label>
        <input
              className="counselor"
              type="text"
              name="counselor"
              id="counselor"
              onChange={handleNewAdalaber}
              value={newAdalaber.counselor}
            />
        <label className="addSpecialityLabel" htmlFor="speciality">Especialidad:</label>
        <input
              className="speciality"
              type="text"
              name="speciality"
              id="speciality"
              onChange={handleNewAdalaber}
              value={newAdalaber.speciality}
            />
        <input
            type="submit"
            value="Añadir una nueva Adalaber"
            onClick={handleAddNewAdalaber}
          />
      </form>

    </div>
  );
}

export default App;