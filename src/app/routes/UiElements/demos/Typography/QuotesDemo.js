import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Quote } from './../../../../components';

const styles = theme => ({
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  }
});

class QuotesDemo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.divider}>
          <Quote align="left" content="Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one." footnote="John Lennon" />
        </div>
        <div className={classes.divider}>
          <Quote align="right" content="A lot of people are afraid to say what they want. That's why they don't get what they want." footnote="Madonna" />
        </div>
      </div>
    );
  }
}

QuotesDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuotesDemo);
