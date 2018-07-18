import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    height: 190,
    marginBottom: 6,
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      height: 120,
      marginBottom: -1,
      alignItems: 'flex-end',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
    '& > *': {
      padding: '0 5px'
    }
  },
  title: {
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 400
  },
  counter: {
    color: theme.palette.common.white,
    fontSize: 28,
    fontWeight: 500
  },
  customContent: {
    textAlign: 'right'
  }
});

class CounterWidget extends PureComponent {
  render() {
    const {
      classes,
      color,
      start,
      end,
      duration,
      title,
      children
    } = this.props;
    return (
      <Paper className={classes.root} style={{ backgroundColor: '#' + color }}>
        <div>
          <Typography className={classes.counter} >
            <CountUp start={start} end={end} duration={duration} useEasing />
          </Typography>
          <Typography className={classes.title} variant="subheading">{title}</Typography>
        </div>
        <div className={classes.customContent}>
          {children}
        </div>
      </Paper>
    );
  }
}

CounterWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(CounterWidget);
