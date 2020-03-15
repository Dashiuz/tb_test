import React from 'react';
import './App.css';
import StringHandlerCard from "./components/StringHandlerCard";
import StringForm from "./components/Form";

function App() {
  return (
    <div className="App">
      <div>
        <h2>Enter your String</h2>
        <StringForm />
      </div>
      <div>
        <h2>Result</h2>
        <StringHandlerCard />
      </div>
    </div>
  );
}

export default App;
