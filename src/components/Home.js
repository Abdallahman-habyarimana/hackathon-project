import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    
  },
  
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open:false
        }
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };
        
    handleClose = () => {
        this.setState({ open: false });
    };
    
    render() {
        const { classes } = this.props; 
      return (
      <div className={classes.root}>
      
          <Button color="inherit" onClick={this.handleClickOpen}>Login</Button>
        
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
    </div>
  );
}
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);