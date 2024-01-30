
import { useRef } from 'react';
import './App.css';
import UseCopyToClipboard from './hooks/UseCopyToClipboard';
import UseLocalStorage from './hooks/UseLocalStorage';
import UsePageBottom from './hooks/UsePageBottom';
import UseWindowResize from './hooks/UseWindowResize';

function App() {
  const [isOpen, toggle] = UseLocalStorage('tab', true)
  const {copy, makeCopy} = UseCopyToClipboard()
  const inputRef = useRef()
  const bottom =UsePageBottom()
  console.log(bottom)
  const {width, height} = UseWindowResize()
  console.log(width, height)

  return (
    <div>
    {/* use local storage */}
      <button onClick={() => toggle((prevState) => !prevState)}>Toggle visibility</button>
      {isOpen && <h1>hello there</h1>}
    {/* use copy to clipboard */}
      <div>
        <input type ="text" ref={inputRef}></input>
        <button onClick={()=> makeCopy(inputRef.current.value)}> Copy </button>
        {copy && <p>Copied to Clipboard</p>}
      </div>
    {/* use page bottom */}
      <div style={{height:"3000px"}}>
        Helper div
      </div>
    </div>

  );
}

export default App;
