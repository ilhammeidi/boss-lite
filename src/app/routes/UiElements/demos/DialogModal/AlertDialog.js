import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialog extends React.Component {
  state = {
    open: false,
    openSlide: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickOpenSlide = () => {
    this.setState({ openSlide: true });
  };

  handleCloseSlide = () => {
    this.setState({ openSlide: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item md={6}>
            <Typography variant="button" className={classes.title}>
              Fade Transition
            </Typography>
            <Button color="secondary" onClick={this.handleClickOpen}>Open alert dialog</Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Let Google help apps determine location. This means sending anonymous location data to
                  Google, even when no apps are running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid item md={6}>
            <Typography variant="button" className={classes.title}>
              Slide Transition
            </Typography>
            <Button onClick={this.handleClickOpenSlide} color="primary">Slide in alert dialog</Button>
            <Dialog
              open={this.state.openSlide}
              TransitionComponent={Transition}
              keepMounted
              onClose={this.handleCloseSlide}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"Use Google's location service?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Let Google help apps determine location. This means sending anonymous location data to
                  Google, even when no apps are running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={this.handleClose} color="primary">
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AlertDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlertDialog);
