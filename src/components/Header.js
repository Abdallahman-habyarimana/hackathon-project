import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import '../styles/styles.css'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//import Home from './Home';
const banner1 = require('../images/banner2.jpg')

console.log(banner1)
const styles = (theme) => ({
    card: {
      maxWidth: '100%',
    },
    media: {
      height: 600,
    },
    content: {
        height: 20,
        color:'white',
        paddingTop: theme.spacing.unit * 7,
        paddingBottom: theme.spacing.unit * 20,
        paddingLeft: theme.spacing.unit * 40,
        paddingRight: theme.spacing.unit * 5,
        align: 'right'
    },
    button: {
        height:40,
        width: 90,
        color:'white',
        paddingLeft: theme.spacing.unit * 70,
        paddingRight: theme.spacing.unit * 5,
        align:'center'
    }

  });
class Header extends Component {
    state = { 
        open:false
     }

     handleClickOpen = () => {
        this.setState({ open: true });
    };
        
    handleClose = () => {
        this.setState({ open: false });
    };

    render() { 
        const { classes } = this.props
        return ( 
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={banner1} title="MEDIA">     
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a className="active" href="/about">About</a></li>
            </ul>
               <div className={classes.content}>
                   <h2> Where are you drinking on the last day of class? </h2>
                   <span> Lets get litty together </span>
                   <br/><br/>
                   
                </div>   
            </CardMedia>
            <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" align="center"> <h3> Login </h3> </DialogTitle>
          <DialogContent>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />

            <TextField
              margin="dense"
              id="password"
              label="password"
              type="password"
              fullWidth/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
        </Card>
        
            
        

    );
    }
}
 
Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Header);