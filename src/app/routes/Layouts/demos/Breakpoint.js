import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  }
});

function Breakpoint(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {/* Breakpoin up block */}
      <Typography variant="headline">Breakpoint up</Typography>
      <Typography gutterBottom noWrap>
        Using any breakpoint up property, the given children will be hidden at or above the breakpoint.
      </Typography>
      <div className={classes.container}>
        <Hidden xsUp>
          <Paper className={classes.paper}>xsUp</Paper>
        </Hidden>
        <Hidden smUp>
          <Paper className={classes.paper}>smUp</Paper>
        </Hidden>
        <Hidden mdUp>
          <Paper className={classes.paper}>mdUp</Paper>
        </Hidden>
        <Hidden lgUp>
          <Paper className={classes.paper}>lgUp</Paper>
        </Hidden>
        <Hidden xlUp>
          <Paper className={classes.paper}>xlUp</Paper>
        </Hidden>
      </div>
      <Typography variant="caption" gutterBottom align="center">Current width: {props.width}</Typography>
      <Divider className={classes.divider} />
      {/* Breakpoin down block */}
      <Typography variant="headline">Breakpoint down</Typography>
      <Typography gutterBottom noWrap>
        Using any breakpoint down property, the given children will be hidden at or below the breakpoint.
      </Typography>
      <div className={classes.container}>
        <Hidden xsDown>
          <Paper className={classes.paper}>xsDown</Paper>
        </Hidden>
        <Hidden smDown>
          <Paper className={classes.paper}>smDown</Paper>
        </Hidden>
        <Hidden mdDown>
          <Paper className={classes.paper}>mdDown</Paper>
        </Hidden>
        <Hidden lgDown>
          <Paper className={classes.paper}>lgDown</Paper>
        </Hidden>
        <Hidden xlDown>
          <Paper className={classes.paper}>xlDown</Paper>
        </Hidden>
      </div>
      <Typography variant="caption" gutterBottom align="center">Current width: {props.width}</Typography>
      <Divider className={classes.divider} />
      {/* Breakpoin only block */}
      <Typography variant="headline">Breakpoint only</Typography>
      <Typography gutterBottom noWrap>
        Using the breakpoint only property, the given children will be hidden at the specified breakpoint(s).
      </Typography>
      <div className={classes.container}>
        <Hidden only="lg">
          <Paper className={classes.paper}>Hidden on lg</Paper>
        </Hidden>
        <Hidden only="sm">
          <Paper className={classes.paper}>Hidden on sm</Paper>
        </Hidden>
        <Hidden only={['sm', 'lg']}>
          <Paper className={classes.paper}>Hidden on sm and lg</Paper>
        </Hidden>
      </div>
      <Typography variant="caption" gutterBottom align="center">Current width: {props.width}</Typography>
    </div>
  );
}

Breakpoint.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(Breakpoint);
