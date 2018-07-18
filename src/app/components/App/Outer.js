import React from 'react';
import { object, PropTypes } from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import brand from 'ba-utils/brand';
import logo from 'ba-images/logo.svg';
import styles from './appStyles-jss';

class Outer extends React.Component {
  render() {
    const {
      classes,
      route,
    } = this.props;
    return (
      <div className={classes.appFrameOuter}>
        <main className={classes.outerContent} id="mainContent">
          <Hidden mdUp>
            <div className={classes.brand}>
              <img src={logo} alt={brand.name} />
              <h3>{brand.name}</h3>
            </div>
          </Hidden>
          {renderRoutes(route.routes)}
        </main>
      </div>
    );
  }
}

Outer.propTypes = {
  classes: PropTypes.object.isRequired,
  route: object,
};

Outer.defaultProps = {
  route: object
};

export default (withStyles(styles)(Outer));
