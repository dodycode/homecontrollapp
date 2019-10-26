import React from 'react';
import logo from './logo.svg';
import './App.css';
import RemoteControl from './components/RemoteControl';
import Dodypras from './components/Dodypras';

function App() {
  return (
    <div className="App">
      <h2>Hello world</h2>
      <RemoteControl />
      <Dodypras />
    </div>
  );
}

export default App;
