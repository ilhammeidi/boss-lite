import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import EditIcon from '@material-ui/icons/ModeEdit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import DeleteIcon from '@material-ui/icons/Delete';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
    margin: '0 auto',
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
});

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class FloatingButtons extends PureComponent {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };
    const fabs = [
      {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon />,
      },
      {
        color: 'secondary',
        className: classes.fab,
        icon: <EditIcon />,
      },
      {
        color: 'inherit',
        className: classNames(classes.fab, classes.fabGreen),
        icon: <UpIcon />,
      },
    ];

    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={16}
        >
          <Grid item md={6}>
            <Typography variant="button" className={classes.divider}>Floating Action Buttons</Typography>
            <Typography className={classes.divider}>
              A floating action button represents the primary action in an application.
            </Typography>
            <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
              <AddIcon />
            </Button>
            <Button variant="fab" color="secondary" aria-label="edit" className={classes.button}>
              <Icon>edit_icon</Icon>
            </Button>
            <Button variant="fab" disabled aria-label="delete" className={classes.button}>
              <DeleteIcon />
            </Button>
          </Grid>
          <Grid item md={6}>
            <Typography variant="button" className={classes.divider}>Floating BUtton in Tab</Typography>
            <Typography className={classes.divider}>
              A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes.
            </Typography>
            <div className={classes.root}>
              <AppBar position="static" color="default">
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  fullWidth
                >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
              >
                <TabContainer dir={theme.direction}>Item One</TabContainer>
                <TabContainer dir={theme.direction}>Item Two</TabContainer>
                <TabContainer dir={theme.direction}>Item Three</TabContainer>
              </SwipeableViews>
              {fabs.map((fab, index) => (
                <Zoom
                  key={fab.color}
                  in={this.state.value === index}
                  timeout={transitionDuration}
                  style={{
                    transitionDelay: this.state.value === index ? transitionDuration.exit : 0,
                  }}
                  unmountOnExit
                >
                  <Button variant="fab" className={fab.className} color={fab.color}>
                    {fab.icon}
                  </Button>
                </Zoom>
              ))}
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

FloatingButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FloatingButtons);
