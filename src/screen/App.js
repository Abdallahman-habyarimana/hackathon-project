import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from '../components/Home';
import Header from '../components/Header';
//import { isAbsolute } from 'path';
import Aboutus from '../components/Form';
import Footer from '../components/Footer'
import Maps from '../components/MapContainer';
import '../styles/styles.css'
import Construction from '../components/Construction';

class App extends Component {
  render() {
    return (
      <div className="container">
  
      <div className="header">
        <Header />
      </div>
      <div>
        <Aboutus/>
      </div>
      <div className="maps">
        <Maps/>
      </div>
    
        <div className="footer">
          <Footer/>
        </div>
        <BrowserRouter>
        <Switch> 
          {/* <Route exact path='/' Component={Home} /> */}
          <Route path='/home' Component={Home} />
          <Route path='/const' Component={Construction} />
       </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
