import './App.css';

const arrayList = ['Efetuando o primerio exercício', 'Me aprimorando com o exercício 2', 'Chegando no exercício 3'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = (array) => {
  return array.map((element) => task(element));
};

function App() {
  return (
    <ul>
      {taskList(arrayList)}
    </ul>
  );
}

export default App;
