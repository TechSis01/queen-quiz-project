import logo from './logo.svg';

import './App.css';
import { useState } from 'react';



function App() {
  const [display, setDisplay] = useState('queen')
  console.log(display)
  return (
      <div>
        {display}
      </div>
  )
}


export default App;
