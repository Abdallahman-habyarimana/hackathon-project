import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import Home from '../components/Home';
import Header from '../components/Header';
//import { isAbsolute } from 'path';
import Aboutus from '../components/Aboutus';
import Footer from '../components/Footer';
//import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />

      <Aboutus />

      <Footer />
      
       <Switch>
         <Route></Route>
         <Route></Route>
         <Route></Route>
       </Switch>

      </BrowserRouter>
  
    );
  }
}

export default App;
