import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import Home from '../components/Home';
import Header from '../components/Header';
//import { isAbsolute } from 'path';
import Aboutus from '../components/Form';

import Maps from '../components/MapContainer';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Header />
      <div><Aboutus/></div>
      <div style={{float:'left'}}><Maps/></div>
      {/* <Footer/> */}
      
       <Switch>
         <Route></Route>
         <Route></Route>
         <Route></Route>
       </Switch>
      
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
