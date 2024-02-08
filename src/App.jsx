
import { useState } from 'react';
import './App.css';
import ad from './img/Rectangle 1 (1).png';
let arr = []
function App() {
  const [val, setVal] = useState('')
  const [render, setRender] = useState(true)
  function fnAdd() {
    arr.push(val);
    setRender(!render)
  }
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h1 className='text'>To-do list</h1>
        </div>
        <input className='inp' type="text" placeholder='Worlds' onChange={(e) => setVal(e.target.value)} />

        <button onClick={fnAdd} className='btn'>Add</button>

        {
          arr.map((item, index) => {
            return (
              <div className='box' >
                <i key={index}>{item}</i> <br />

              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
