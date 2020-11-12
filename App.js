import React from 'react'
import './App.css';
import SlotM from './Components/SlotM'

function App() {
  return (
    <div className="App">
        <h1 className="heading_style"> 🎰 Welcome to <span style={{fontWeight:"bolder"}}> Slot machine game</span> 🎰 </h1>
        <div style={{textAlign:'center' }} className='style_inner'>
          <SlotM x = '😄' y = '😄' z = '💓'/>
          <SlotM x = '😄' y = '🍎' z = '💓'/>
          <SlotM x = '😄' y = '😄' z = '😄'/>
          <SlotM x = '😄' y = '😄' z = '💓'/>
          <SlotM x = '😄' y = '🍨' z = '💓'/>
        </div>
    </div>
  );
}

export default App;
