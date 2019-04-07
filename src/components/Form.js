import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing.unit
  }
});

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      place : "",
      time: "",
      alone: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePlaceChange = this.handlePlaceChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleAloneChange = this.handleAloneChange.bind(this);
  }
  handleNameChange(name) {
    this.setState({
      name: name.target.value
    });
  }
  handlePlaceChange(place) {
    this.setState({
      place: place.target.value
    });
  }
  handleTimeChange(time) {
    this.setState({
      time: time.target.value
    });
  }
  handleAloneChange(alone) {
    this.setState({
      alone: alone.target.value
    });
  }

  render() {
    const { classes } = this.props;
    console.log("STATE", this.state);
    return (
      <div className={classes.container}>
        <Input
          placeholder="Who are you?"
          value={this.state.name}
          className={classes.input}
          onChange={this.handleNameChange}
          inputProps={{
            "aria-label": "Description"
          }}
        />

        <Input
          placeholder="Where are you going?"
          value={this.state.place}
          className={classes.input}
          onChange={this.handlePlaceChange}
          inputProps={{
            "aria-label": "Description"
          }}
        />

        <Input
          placeholder="What time?"
          value={this.state.time}
          className={classes.input}
          onChange={this.handleTimeChange}
          inputProps={{
            "aria-label": "Description"
          }}
        />
        <Input
          placeholder="Coming solo?"
          value={this.state.alone}
          className={classes.input}
          onChange={this.handleAloneChange}
          inputProps={{
            "aria-label": "Description"
          }}
        />
      </div>
    );
  }
}
Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
