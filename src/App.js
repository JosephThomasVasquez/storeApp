import React from 'react';
import Header from './components/Header'
import Item from './components/Item'
import Cart from './components/Cart'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Item />
        <Cart />
      </header>
    </div>
  );
}

export default App;
