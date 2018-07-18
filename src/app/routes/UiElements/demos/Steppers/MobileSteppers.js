import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
      margin: '0 auto'
    },
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class MobileSteppers extends React.Component {
  state = {
    activeStepDots: 0,
    activeStepLine: 0,
  };

  handleNextDots = () => {
    this.setState({
      activeStepDots: this.state.activeStepDots + 1,
    });
  };

  handleBackDots = () => {
    this.setState({
      activeStepDots: this.state.activeStepDots - 1,
    });
  };

  handleNextLine = () => {
    this.setState({
      activeStepLine: this.state.activeStepLine + 1,
    });
  };

  handleBackLine = () => {
    this.setState({
      activeStepLine: this.state.activeStepLine - 1,
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <Grid container spacing={16}>
        <Grid item container justify="center" direction="column" md={6}>
          <Typography variant="button" className={classes.title}>
            Mobile Stepper - Dots
          </Typography>
          <MobileStepper
            variant="dots"
            steps={6}
            position="static"
            activeStep={this.state.activeStepDots}
            className={classes.root}
            nextButton={
              <Button size="small" onClick={this.handleNextDots} disabled={this.state.activeStepDots === 5}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBackDots} disabled={this.state.activeStepDots === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </Grid>
        <Grid item container justify="center" direction="column" md={6}>
          <Typography variant="button" className={classes.title}>
            Mobile Stepper - Progress
          </Typography>
          <MobileStepper
            variant="progress"
            steps={6}
            position="static"
            activeStep={this.state.activeStepLine}
            className={classes.root}
            nextButton={
              <Button size="small" onClick={this.handleNextLine} disabled={this.state.activeStepLine === 5}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBackLine} disabled={this.state.activeStepLine === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </Grid>
      </Grid>
    );
  }
}

MobileSteppers.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MobileSteppers);
