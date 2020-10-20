import React, { Component } from 'react';
// import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';
import {DISHES} from './shared/dishes';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES,
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <NavbarBrand href="/"> The Con Fusion App</NavbarBrand>
        </Navbar>
        <Menu dishes= {this.state.dishes} />
      </div>
    );
  }
}

export default App;
