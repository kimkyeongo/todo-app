import Todo from './component/Todo';
import './App.css';

function App() {
    const name = "TODO LIST";
  return (
    <div className="App">
      <header className="App-header">
          {name}
      </header>
      <body className="App-body">
        <Todo />
      </body>
    </div>
  );
}

export default App;
