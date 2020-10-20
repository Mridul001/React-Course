import React from 'react';
// import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <NavbarBrand href="/"> The Con Fusion App</NavbarBrand>
      </Navbar>
      <Menu/>
    
       
    </div>
  );
}

export default App;
