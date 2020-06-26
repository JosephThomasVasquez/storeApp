import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import Header from './components/Header';
import ContainerDisplay from './components/ContainerDisplay';
import Cart from './components/Cart';
import './App.css';

const theme = createMuiTheme({
  palette: {
      primary: {
        main: lightBlue[700]
      }
  }
});

console.log(lightBlue);


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
        <Header />
        <ContainerDisplay />
        <Cart />
    </div>
    </MuiThemeProvider>
  );
}

export default App;
