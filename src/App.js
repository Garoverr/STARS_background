import React, { useEffect, useRef } from "react";
import "./App.css";
import "./stars.css";
import createStars from "./stars";

function App() {
  const starsContainerRef = useRef(null);

  useEffect(() => {
    createStars();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="stars-title"> AREA-51 </h1>
        <div ref={starsContainerRef} className="stars-container"></div>
      </header>
    </div>
  );
}

export default App;
