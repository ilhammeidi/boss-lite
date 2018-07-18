import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import UserMenu from './UserMenu';
import styles from './header-jss';

class Header extends React.Component {
  state = {
    open: false,
  };

  render() {
    const {
      classes,
      toggleDrawerOpen,
      margin,
      turnDarker,
    } = this.props;

    return (
      <AppBar
        className={
          classNames(
            classes.appBar,
            margin && classes.appBarShift,
            classes.appbar,
            turnDarker && classes.darker
          )
        }
      >
        <Toolbar disableGutters={!this.state.open}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.flex}>
            <div className={classes.wrapper}>
              <div className={classes.search}>
                <SearchIcon />
              </div>
              <input className={classes.input} placeholder="Search" />
            </div>
          </div>
          <Hidden xsDown>
            <span className={classes.separatorV} />
          </Hidden>
          <UserMenu />
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  margin: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Header);
