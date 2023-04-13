import "./App.css";

function App() {
  const empList = [
    { name: "shri", age: 26, salary: 45000 },
    { name: "shri", age: 26, salary: 45000 },
    { name: "shri", age: 26, salary: 45000 },
    { name: "maha", age: 24, salary: 40000 },
    { name: "Burr", age: 74, salary: 31409 },
    { name: "Benjy", age: 64, salary: 36339 },
    { name: "Levey", age: 60, salary: 30744 },
    { name: "Royall", age: 42, salary: 15835 },
    { name: "Rabi", age: 92, salary: 91729 },
    { name: "Innis", age: 26, salary: 90548 },
    { name: "Sanford", age: 2, salary: 91049 },
    { name: "Trever", age: 36, salary: 50901 },
    { name: "Norman", age: 40, salary: 98628 },
    { name: "Giacobo", age: 12, salary: 89228 },
    { name: "Guntar", age: 56, salary: 26693 },
    { name: "Jarred", age: 88, salary: 29428 },
    { name: "Iago", age: 14, salary: 15531 },
    { name: "Claudianus", age: 36, salary: 66959 },
    { name: "Todd", age: 22, salary: 14032 },
    { name: "Svend", age: 53, salary: 9278 },
    { name: "Carleton", age: 62, salary: 23563 },
    { name: "Jermayne", age: 39, salary: 93718 },
  ];

  return (
    <div className="emplist">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>salary</th>
          </tr>
          {empList.map((emp, key) => (
            <tr key={key}>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
