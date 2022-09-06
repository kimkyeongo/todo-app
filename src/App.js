import Todo from './component/Todo';
import './App.css';

function App() {
    const name = "TODO LIST";
  return (
    <div className="App">
      <header className="App-header">
          <h1>{name}</h1>
      </header>
        <Todo />
    </div>
  );
}

export default App;
