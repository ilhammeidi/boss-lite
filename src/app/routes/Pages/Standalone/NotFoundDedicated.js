import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './../../../components/App/appStyles-jss';
import Error from './../Error';

class NotFoundDedicated extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appFrameOuter}>
        <main className={classes.outerContent} id="mainContent">
          <Error />
        </main>
      </div>
    );
  }
}

NotFoundDedicated.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(NotFoundDedicated));
