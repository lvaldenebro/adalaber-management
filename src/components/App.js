// Fichero src/components/App.js
import '../styles/App.css';

function App() {
  return (
    <div>
      <h1>Adalabers</h1>
      <form>
        <label className="searchNameLabel" for="searchName">Nombre:</label>
        <input
              className="searchName"
              type="search"
              name="searchName"
              placeholder="Ej: MariCarmen"
            />
        <label className="searchTeacherLabel" for="searchTeacher">Escoge una tutora:</label>
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

        <tbody>
          <tr>
            <td>MariCarmen</td>
            <td>Yanelis</td>
            <td>Python</td>
          </tr>
          <tr>
            <td>Amparo</td>
            <td>Dayana</td>
            <td>IA</td>
          </tr>
          <tr>
            <td>Escandia</td>
            <td>Iván</td>
            <td>3D graphics</td>
          </tr>
        </tbody>
      </table>

      <form>
        <fieldset> Añadir una Adalaber</fieldset>
        <label className="addNameLabel" for="addName">Nombre:</label>
        <input
              className="addName"
              type="text"
              name="addName"
            />
        <label className="addTeacherLabel" for="addTeacher">Tutora:</label>
        <input
              className="addTeacher"
              type="text"
              name="addTeacher"
            />
        <label className="addSpecialityLabel" for="addSpeciality">Especialidad:</label>
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