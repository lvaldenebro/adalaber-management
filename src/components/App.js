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
  const [filter, setFilter] = useState('');
  const handleFilter =  (ev) => {
    setFilter(ev.target.value)
  }

  const printData = data
  .map((eachAdalaber, id) => {
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
    if (newAdalaber.name !== '' && newAdalaber.counselor !== '' && newAdalaber.speciality !== '') {
      setData([...data, newAdalaber]);
      setNewAdalaber({
        id: crypto.randomUUID(),
        name: '',
        counselor: '',
        speciality: '',
        social_networks: [
          {
            name: 'GitHub',
            url: ''
          },
          {
            name: 'LinkedIn',
            url: ''
          }
        ]
        });
    }
  }

  return (
    <div>
      <h1>Adalabers</h1>
      <p>Filters non working</p>
      <form>
        <label htmlFor="searchName">Nombre:</label>
        <input
              type="search"
              name="searchName"
              placeholder="Ej: MariCarmen"
            />
        <label htmlFor="searchTeacher">Escoge una tutora:</label>
        <select
              type="search"
              name="searchTeacher"
              placeholder="Ej: MariCarmen">
          <option value="dayana">Dayana</option>
          <option value="yanelis">Yanelis</option>
          <option value="ivan">Iván</option>
        </select>
      </form>

      <table>
        <thead><tr>
          <th>Nombre</th>
          <th>Tutora</th>
          <th>Especialidad</th>
        </tr></thead>

        <tbody>{printData}</tbody>
      </table>

      <form>
        <h2>Añadir una Adalaber</h2>
        <label htmlFor="name">Nombre:</label>
        <input
              type="text"
              name="name"
              id="name"
              onChange={handleNewAdalaber}
              value={newAdalaber.name}
              placeholder="MariCarmen"
            />
        <label htmlFor="counselor">Tutora:</label>
        <input
              type="text"
              name="counselor"
              id="counselor"
              onChange={handleNewAdalaber}
              value={newAdalaber.counselor}
              placeholder="Miguel"
            />
        <label htmlFor="speciality">Especialidad:</label>
        <input
              type="text"
              name="speciality"
              id="speciality"
              onChange={handleNewAdalaber}
              value={newAdalaber.speciality}
              placeholder="Python"
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