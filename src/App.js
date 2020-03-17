import React, { useState } from "react";
import "./App.css";

function App() {
  const [bin, setBin] = useState("");

  function binaryToDecimal() {
    let flag = true;
    let fullBinary = bin.split("");

    fullBinary.forEach(char => {
      if (flag) {
        if (char !== "0" && char !== "1") {
          flag = false;
        }
      }
    });

    if (!flag) {
      alert("Invalid Binary");
    } else {
       let dec = parseInt(bin, 2);
      alert(`${bin} in decimal is ${dec}`)
    }
  }

  return (
    <div className="App">
      <input
        type="text"
        maxLength="8"
        id="bin"
        value={bin}
        onChange={e => setBin(e.target.value)}
      />
      <button onClick={binaryToDecimal}>Transform</button>
    </div>
  );
}

export default App;
