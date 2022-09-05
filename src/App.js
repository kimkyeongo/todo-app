import Todo from './component/Todo';
import './App.css';

function App() {
    const name = "TODO LIST";
  return (
    <div className="App">
      <header className="App-header">
          {name}
      </header>
        {Todo}
    </div>
  );
}

export default App;
