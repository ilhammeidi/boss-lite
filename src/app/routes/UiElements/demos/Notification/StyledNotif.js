import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import messageStyles from 'ba-components/Messages.scss';

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  appFrame: {
    height: 360,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    marginBottom: theme.spacing.unit,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabMoveUp: {
    transform: 'translate3d(0, -46px, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  fabMoveDown: {
    transform: 'translate3d(0, 0, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  snackbarApp: {
    position: 'absolute',
    width: '100%'
  },
  snackbarContent: {
    width: '100%'
  },
});

const action = (
  <Button color="secondary" size="small">
    Action
  </Button>
);

class StyledNotif extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const fabClassName = classNames(classes.fab, open ? classes.fabMoveUp : classes.fabMoveDown);

    return (
      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        direction="row"
        spacing={16}
      >
        <Grid item md={6} xs={12}>
          <Typography variant="button" className={classes.divider}>Styled Notification</Typography>
          <div>
            <SnackbarContent className={classes.snackbar} message="Notification default" action={action} />
            <SnackbarContent className={classNames(classes.snackbar, messageStyles.bgInfo)} message="Notification Info" action={action} />
            <SnackbarContent
              className={classNames(classes.snackbar, messageStyles.bgSuccess)}
              message="Success Notification Message"
            />
            <SnackbarContent
              className={classNames(classes.snackbar, messageStyles.bgWarning)}
              message="I love candy. I love cookies. I love cupcakes."
              action={action}
            />
            <SnackbarContent
              className={classNames(classes.snackbar, messageStyles.bgError)}
              message={
                'I love candy. I love cookies. I love cupcakes. \
                I love cheesecake. I love chocolate.'
              }
              action={action}
            />
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={classes.root}>
            <Button className={classes.button} onClick={this.handleClick}>
              Open snackbar
            </Button>
            <div className={classes.appFrame}>
              <AppBar position="static" color="primary">
                <Toolbar>
                  <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit">
                    Out of my way!
                  </Typography>
                </Toolbar>
              </AppBar>
              <Button variant="fab" color="secondary" className={fabClassName}>
                <AddIcon />
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={this.handleClose}
                ContentProps={{
                  'aria-describedby': 'snackbar-fab-message-id',
                  className: classes.snackbarContent,
                }}
                message={<span>Archived</span>}
                action={
                  <Button color="inherit" size="small" onClick={this.handleClose}>
                    Undo
                  </Button>
                }
                className={classes.snackbarApp}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

StyledNotif.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StyledNotif);
