import './App.css';
import { useState } from 'react';
import Upgrade from './components/Upgrade';

const App = () => {
  // Initialize states for counter and multiplier
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // Function called when user clicks Samosa
  const updateCount = () => setCount(count + multiplier)

  const doubleStuffedBtn = document.getElementById('double-stuffed');
  const partyPackBtn = document.getElementById('party-pack');
  const fullFeastBtn = document.getElementById('full-feast');

  // Function called when user buys Double Stuffed upgrade
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier/multiplier * 2);
      setCount(count - 10);
      doubleStuffedBtn.classList.remove("button-active");
      doubleStuffedBtn.classList.add("button-disabled");
      doubleStuffedBtn.disabled = true;

    }
  }

  // Function called when user buys Party Pack upgrade
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier/multiplier * 5);
      setCount(count - 100);
      partyPackBtn.classList.remove("button-active");
      partyPackBtn.classList.add("button-disabled");
      partyPackBtn.disabled = true;
    }
  }

  // Function called when user buys Full Feast upgrade
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier/multiplier * 10);
      setCount(count - 1000);
      fullFeastBtn.classList.remove("button-active");
      fullFeastBtn.classList.add("button-disabled");
      fullFeastBtn.disabled = true;
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="./samosa.png" onClick={updateCount}></img>
      </div>

      <div className="container">
        <Upgrade id="double-stuffed" className="button-active" name="Double Stuffed 👯‍♀️" description="2x per click" cost="10 samosas" upgrade={buyDoubleStuffed} />
        <Upgrade id="party-pack" className="button-active" name="Party Pack 🎉" description="5x per click" cost="100 samosas" upgrade={buyPartyPack} />
        <Upgrade id="full-feast" className="button-active" name="Full Feast 👩🏽‍🍳" description="10x per click" cost="1000 samosas" upgrade={buyFullFeast} />
      </div>
    </div>
  )
}

export default App
