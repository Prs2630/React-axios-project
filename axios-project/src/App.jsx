import { useState } from 'react';
// import logo from './logo.svg'
import './App.css';
import Showdata from './compoents/Showdata';
import Adddata from './compoents/Adddata';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Adddata />
      <Showdata />
    </div>
  )
}

export default App
