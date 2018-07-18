import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Manager, Target, Popper } from 'react-popper';
import classNames from 'classnames';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
    zIndex: 1
  },
  popperClose: {
    pointerEvents: 'none',
    zIndex: 2
  },
});

class MenuTransition extends React.Component {
  state = {
    anchorEl: null,
    openGrow: false,
    openSlide: false,
    openCollapse: false,
    openZoom: false,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleCloseToggle = () => {
    this.setState({
      openGrow: false,
      openSlide: false,
      openCollapse: false,
      openZoom: false,
    });
  };

  handleToggle = type => {
    this.setState({ [type]: !this.state[type] });
  };

  render() {
    const { classes } = this.props;
    const {
      anchorEl,
      openGrow,
      openCollapse,
      openZoom
    } = this.state;

    return (
      <Grid container spacing={16}>
        <Grid item md={4}>
          <Button
            aria-owns={anchorEl ? 'fade-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            Open with fade transition
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            transition={Fade}
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
        </Grid>
        <Grid item md={4}>
          <Manager>
            <Target>
              <div
                ref={node => {
                  this.target1 = node;
                }}
              >
                <Button
                  aria-owns={openGrow ? 'menu-list-grow' : null}
                  aria-haspopup="true"
                  onClick={() => this.handleToggle('openGrow')}
                >
                  Open with grow transition
                </Button>
              </div>
            </Target>
            <Popper
              placement="bottom-start"
              eventsEnabled={openGrow}
              className={classNames({ [classes.popperClose]: !openGrow })}
            >
              <ClickAwayListener onClickAway={this.handleCloseToggle}>
                <Grow in={openGrow} id="menu-list-grow" style={{ transformOrigin: '0 0 0' }}>
                  <Paper className={classes.paper}>
                    <MenuList role="menu">
                      <MenuItem onClick={this.handleCloseToggle}>Profile</MenuItem>
                      <MenuItem onClick={this.handleCloseToggle}>My account</MenuItem>
                      <MenuItem onClick={this.handleCloseToggle}>Logout</MenuItem>
                    </MenuList>
                  </Paper>
                </Grow>
              </ClickAwayListener>
            </Popper>
          </Manager>
        </Grid>
        <Grid item md={4}>
          <Manager>
            <Target>
              <div
                ref={node => {
                  this.target1 = node;
                }}
              >
                <Button
                  aria-owns={openCollapse ? 'menu-list-grow' : null}
                  aria-haspopup="true"
                  onClick={() => this.handleToggle('openCollapse')}
                >
                  Open with collapse transition
                </Button>
              </div>
            </Target>
            <Popper
              placement="bottom-start"
              eventsEnabled={openCollapse}
              className={classNames({ [classes.popperClose]: !openCollapse })}
            >
              <ClickAwayListener onClickAway={this.handleCloseToggle}>
                <Collapse in={openCollapse} id="menu-list-collapse" style={{ transformOrigin: '0 0 0' }}>
                  <Paper className={classes.paper}>
                    <MenuList role="menu">
                      <MenuItem onClick={this.handleCloseToggle}>Profile</MenuItem>
                      <MenuItem onClick={this.handleCloseToggle}>My account</MenuItem>
                      <MenuItem onClick={this.handleCloseToggle}>Logout</MenuItem>
                    </MenuList>
                  </Paper>
                </Collapse>
              </ClickAwayListener>
            </Popper>
          </Manager>
        </Grid>
        <Grid item md={4}>
          <Manager>
            <Target>
              <div
                ref={node => {
                  this.target1 = node;
                }}
              >
                <Button
                  aria-owns={openZoom ? 'menu-list-grow' : null}
                  aria-haspopup="true"
                  onClick={() => this.handleToggle('openZoom')}
                >
                  Open with zoom transition
                </Button>
              </div>
            </Target>
            <Popper
              placement="bottom-start"
              eventsEnabled={openZoom}
              className={classNames({ [classes.popperClose]: !openZoom })}
            >
              <ClickAwayListener onClickAway={() => this.handleCloseToggle('openZoom')}>
                <Zoom in={openZoom} id="menu-list-zoom">
                  <Paper className={classes.paper}>
                    <MenuList role="menu">
                      <MenuItem onClick={this.handleCloseToggle}>Profile</MenuItem>
                      <MenuItem onClick={this.handleCloseToggle}>My account</MenuItem>
                      <MenuItem onClick={this.handleCloseToggle}>Logout</MenuItem>
                    </MenuList>
                  </Paper>
                </Zoom>
              </ClickAwayListener>
            </Popper>
          </Manager>
        </Grid>
      </Grid>
    );
  }
}

MenuTransition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuTransition);

