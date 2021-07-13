import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [sw, setSW] = useState("on");
  const c = () => {
    setSW( (sw==="off") ? "on" : "off" )
  };

  useEffect ( () => {
    var ttl = document.getElementById('hdr')
    ttl.style.visibility = (sw==="on") ? "visible": "hidden";
  }, [sw]);


  return (
    <div className="App">
      <header className="App-header">
        { <h1 id='hdr' > Hello </h1> }
        <button onClick={c} > Click me</button>
      </header>
    </div>
  );
}

export default App;