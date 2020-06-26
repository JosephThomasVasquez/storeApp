import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import Header from './components/Header'
import Item from './components/Item'
import Cart from './components/Cart'
import './App.css';

const theme = createMuiTheme({
  palette: {
      primary: {
        light: '#63ccff',
        main: '#039be5',
        dark: '006db3'
      }
  }
});

console.log(lightBlue);


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <Header />
        <Item />
        <Cart />
      </header>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
