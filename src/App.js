
import { useRef } from 'react';
import './App.css';
import UseCopyToClipboard from './hooks/UseCopyToClipboard';
import UseLocalStorage from './hooks/UseLocalStorage';

function App() {
  const [isOpen, toggle] = UseLocalStorage('tab', true)
  const {copy, makeCopy} = UseCopyToClipboard()
  const inputRef = useRef()

  return (
    <div>
      <button onClick={() => toggle((prevState) => !prevState)}>Toggle visibility</button>
      {isOpen && <h1>hello there</h1>}

      <div>
        <input type ="text" ref={inputRef}></input>
        <button onClick={()=> makeCopy(inputRef.current.value)}> Copy </button>
        {copy && <p>Copied to Clipboard</p>}
      </div>
    </div>

  );
}

export default App;
