import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Comment from '@material-ui/icons/Comment';
import styles from './cardStyle-jss';

class GeneralCard extends React.Component {
  render() {
    const {
      classes,
      children,
      liked,
      shared,
      commented
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          {children}
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" className={classes.button}>
            <FavoriteIcon className={liked > 0 && classes.liked} />
            <span className={classes.num}>{liked}</span>
          </IconButton>
          <IconButton aria-label="Share" className={classes.button}>
            <ShareIcon className={shared > 0 && classes.shared} />
            <span className={classes.num}>{shared}</span>
          </IconButton>
          <IconButton aria-label="Comment" className={classes.rightIcon}>
            <Comment />
            <span className={classes.num}>{commented}</span>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

GeneralCard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  liked: PropTypes.number.isRequired,
  shared: PropTypes.number.isRequired,
  commented: PropTypes.number.isRequired,
};

export default withStyles(styles)(GeneralCard);
