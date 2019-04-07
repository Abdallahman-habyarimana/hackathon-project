import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
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
      <BrowserRouter>
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
      
        <Switch> 
          <Route exact path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/construction' Component={Construction} />
       </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
