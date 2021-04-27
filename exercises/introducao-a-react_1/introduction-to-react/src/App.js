import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol>
      {task('Efetuando o primeiro exercício;')}
    </ol>
  );
}

export default App;
