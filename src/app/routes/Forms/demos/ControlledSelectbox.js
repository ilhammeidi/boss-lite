import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  field: {
    margin: `${theme.spacing.unit * 3}px 5px`,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
});

class ControlledSelectbox extends PureComponent {
  state = {
    open: false,
    openRemotely: false,
    age: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: Number(event.target.value) });
  };

  handleChangeControll = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickOpenRemot = () => {
    this.setState({ openRemotely: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleCloseRemot = () => {
    this.setState({ openRemotely: false });
  };

  handleOpenRemot = () => {
    this.setState({ openRemotely: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="space-around"
          direction="row"
          spacing={24}
        >
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>With a Dialog</Typography>
            <Typography className={classes.divider}>While its not encouraged by the Material Design specification, you can use a select inside a dialog.</Typography>
            <div>
              <Button variant="raised" color="secondary" onClick={this.handleClickOpen}>Open select dialog</Button>
              <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={this.state.open}
                onClose={this.handleClose}
              >
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                  <form className={classes.container}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                      <Select
                        native
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        input={<Input id="age-native-simple" />}
                      >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-simple">Age</InputLabel>
                      <Select
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        input={<Input id="age-simple" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.handleClose} color="primary">
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Controlled open Select</Typography>
            <div>
              <form autoComplete="off">
                <Button variant="raised" color="secondary" className={classes.button} onClick={this.handleClickOpenRemot}>
                  Open the select
                </Button>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="controlled-open-select">Age</InputLabel>
                  <Select
                    open={this.state.openRemotely}
                    onClose={this.handleCloseRemot}
                    onOpen={this.handleOpenRemot}
                    value={this.state.age}
                    onChange={this.handleChangeControll}
                    inputProps={{
                      name: 'age',
                      id: 'controlled-open-select',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ControlledSelectbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledSelectbox);
