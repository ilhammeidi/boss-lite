import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  button: {
    margin: theme.spacing.unit
  }
});

class SimpleNotif extends React.Component {
  state = {
    open: false,
    open2: false,
    vertical: null,
    horizontal: null,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  handleClick2 = state => () => {
    this.setState({ open2: true, ...state });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };

  render() {
    const { classes } = this.props;
    const { vertical, horizontal, open2 } = this.state;
    return (
      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        direction="row"
        spacing={16}
      >
        <Grid item md={6}>
          <Typography variant="button" className={classes.divider}>Simple Notification</Typography>
          <div>
            <Button variant="raised" onClick={this.handleClick}>Open simple snackbar</Button>
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.open}
              autoHideDuration={6000}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">Note archived</span>}
              action={[
                <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                  UNDO
                </Button>,
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  className={classes.close}
                  onClick={this.handleClose}
                >
                  <CloseIcon />
                </IconButton>,
              ]}
            />
          </div>
        </Grid>
        <Grid item md={6}>
          <Typography variant="button" className={classes.divider}>Positioning</Typography>
          <div>
            <Button className={classes.button} variant="raised" onClick={this.handleClick2({ vertical: 'top', horizontal: 'center' })}>
              Top-Center
            </Button>
            <Button className={classes.button} variant="raised" onClick={this.handleClick2({ vertical: 'top', horizontal: 'right' })}>
              Top-Right
            </Button>
            <Button className={classes.button} variant="raised" onClick={this.handleClick2({ vertical: 'bottom', horizontal: 'right' })}>
              Bottom-Right
            </Button>
            <Button className={classes.button} variant="raised" onClick={this.handleClick2({ vertical: 'bottom', horizontal: 'center' })}>
              Bottom-Center
            </Button>
            <Button className={classes.button} variant="raised" onClick={this.handleClick2({ vertical: 'bottom', horizontal: 'left' })}>
              Bottom-Left
            </Button>
            <Button className={classes.button} variant="raised" onClick={this.handleClick2({ vertical: 'top', horizontal: 'left' })}>
              Top-Left
            </Button>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open2}
              onClose={this.handleClose2}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">I love snacks</span>}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

SimpleNotif.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleNotif);
