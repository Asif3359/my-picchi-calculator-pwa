import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';

function App() {
  return (
    <div className="App flex justify-center items-center w-full h-[100vh] clear-left container mx-auto px-4">
  <Calculator></Calculator>
    </div>
  );
}

export default App;
