import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import imgApi from 'ba-utils/images';

const tutorialSteps = [
  {
    label: 'How to be happy :)',
    imgPath: imgApi[45],
  },
  {
    label: '1. Work with something that you like, like…',
    imgPath: imgApi[33],
  },
  {
    label: '2. Keep your friends close to you and hangout with them',
    imgPath: imgApi[14],
  },
  {
    label: '3. Travel everytime that you have a chance',
    imgPath: imgApi[9],
  },
  {
    label: '4. And contribute to Material-UI :D',
    imgPath: imgApi[44],
  },
];

const styles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
    flexGrow: 1,
  },
  header: {
    textAlign: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    margin: '0 auto'
  },
  figure: {
    maxWidth: 400,
    overflow: 'hidden',
    margin: '0 auto'
  },
  mobileStepper: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
    margin: '0 auto',
    textAlign: 'center'
  }
});

class StepperCarousel extends React.Component {
  state = {
    activeStep: 0,
    activeStepSwipe: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleNextSwipe = () => {
    this.setState(prevState => ({
      activeStepSwipe: prevState.activeStepSwipe + 1,
    }));
  };

  handleBackSwipe = () => {
    this.setState(prevState => ({
      activeStepSwipe: prevState.activeStepSwipe - 1,
    }));
  };

  handleStepChangeSwipe = activeStepSwipe => {
    this.setState({ activeStepSwipe });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep, activeStepSwipe } = this.state;

    const maxSteps = tutorialSteps.length;
    const maxStepsSwipe = tutorialSteps.length;

    return (
      <Grid container spacing={16}>
        <Grid item container justify="center" direction="column" md={6}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].label}</Typography>
          </Paper>
          <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].label}
          />
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </Grid>
        <Grid item container justify="center" direction="column" md={6}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStepSwipe].label}</Typography>
          </Paper>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.activeStepSwipe}
            onChangeIndex={this.handleStepChangeSwipe}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div className={classes.figure} key={index.toString()}>
                <img key={step.label} className={classes.img} src={step.imgPath} alt={step.label} />
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            variant="text"
            steps={maxStepsSwipe}
            position="static"
            activeStep={activeStepSwipe}
            className={classes.mobileStepper}
            nextButton={
              <Button size="small" onClick={this.handleNextSwipe} disabled={activeStepSwipe === maxStepsSwipe - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBackSwipe} disabled={activeStepSwipe === 0}>
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

StepperCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(StepperCarousel);
