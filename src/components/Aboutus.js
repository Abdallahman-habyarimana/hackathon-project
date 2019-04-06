import React, { Component } from 'react';
import '../styles/styles.css'
class Aboutus extends Component {
    state = {  }
    render() { 
        //const { classes } = this.props
        return ( 
            <div>
                <h1> Get to knows what this web do </h1>
                <p className="aboutus-container">
                    Fun direction is a simple website that use google map API
                    (Google Geolocation API, Google Photo API, Google Place API).
                    The website help you to know the the direction and the places of
                    your classmates, teammates or other groupes that wish to join for fun.
                    you will need an account for adding places and view, and logged in
                    you to access all the information.</p>
            </div>
         );
    }
}
 
export default Aboutus;