import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Comment from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './cardStyle-jss';

const optionsOpt = [
  'Report this post',
  'Hide this post',
  'Copy link',
];

const ITEM_HEIGHT = 48;

class PostCard extends React.Component {
  state = { anchorElOpt: null };

  handleClickOpt = event => {
    this.setState({ anchorElOpt: event.currentTarget });
  };

  handleCloseOpt = () => {
    this.setState({ anchorElOpt: null });
  };

  render() {
    const {
      classes,
      avatar,
      name,
      date,
      image,
      content,
      liked,
      shared,
      commented
    } = this.props;
    const { anchorElOpt } = this.state;
    return (
      <Card className={classes.cardSocmed}>
        <CardHeader
          avatar={
            <Avatar alt="avatar" src={avatar} className={classes.avatar} />
          }
          action={
            <IconButton
              aria-label="More"
              aria-owns={anchorElOpt ? 'long-menu' : null}
              aria-haspopup="true"
              className={classes.button}
              onClick={this.handleClickOpt}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={date}
        />
        <Menu
          id="long-menu"
          anchorEl={anchorElOpt}
          open={Boolean(anchorElOpt)}
          onClose={this.handleCloseOpt}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {optionsOpt.map(option => (
            <MenuItem key={option} selected={option === 'Edit Profile'} onClick={this.handleCloseOpt}>
              {option}
            </MenuItem>
          ))}
        </Menu>
        { image !== '' &&
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
        }
        <CardContent>
          <Typography component="p">
            {content}
          </Typography>
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

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.string.isRequired,
  liked: PropTypes.number.isRequired,
  shared: PropTypes.number.isRequired,
  commented: PropTypes.number.isRequired,
};

PostCard.defaultProps = {
  image: ''
};

export default withStyles(styles)(PostCard);
