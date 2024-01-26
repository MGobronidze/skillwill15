import logo from './logo.svg';
import './App.css';
import UseLocalStorage from './hooks/UseLocalStorage';

function App() {
  const [isOpen, toggle] = UseLocalStorage('tab', true)

  return (
    <div>
      <button onClick={() => toggle((prevState) => !prevState)}>Toggle visibility</button>
      {isOpen && <h1>hello there</h1>}
    </div>
  );
}

export default App;
