import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import ImageIcon from '@material-ui/icons/Image';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Divider from '@material-ui/core/Divider';
import imgApi from 'ba-utils/images';

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  avatarRed: {
    backgroundColor: red[500],
  },
  avatarGreen: {
    backgroundColor: green[500],
  },
  avatarAmber: {
    backgroundColor: amber[500],
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  }
});

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

class AvatarsDemo extends PureComponent {
  render() {
    const { classes } = this.props;
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
            <Typography variant="button" className={classes.divider}>Avatars in Tag(Chip)</Typography>
            <Grid
              container
              alignItems="flex-start"
              justify="flex-start"
              direction="row"
              spacing={8}
            >
              <Chip
                avatar={<Avatar>MB</Avatar>}
                label="Clickable Chip"
                onClick={handleClick}
                className={classes.chip}
              />
              <Chip
                avatar={<Avatar src="/images/pp_boy.svg" />}
                label="Deletable Chip"
                onDelete={handleDelete}
                className={classes.chip}
              />
              <Chip
                avatar={
                  <Avatar>
                    <FaceIcon />
                  </Avatar>
                }
                label="Clickable Deletable Chip"
                onClick={handleClick}
                onDelete={handleDelete}
                className={classes.chip}
              />
            </Grid>
            <Divider className={classes.divider} />
            <Typography variant="button" className={classes.divider}>Avatars in List Menu</Typography>
            <div className={classes.root}>
              <List>
                <ListItem>
                  <Avatar className={classes.avatarRed}>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar className={classes.avatarGreen}>
                    <WorkIcon />
                  </Avatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <Avatar className={classes.avatarAmber}>
                    <BeachAccessIcon />
                  </Avatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item md={6}>
            <Typography variant="button" className={classes.divider}>Avatars in Social Media</Typography>
            <div>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar src="/images/pp_girl.svg" />
                  }
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Aliquam nec ex aliquet"
                  subheader="September 14, 2018"
                />
                <CardMedia
                  className={classes.media}
                  image={imgApi[7]}
                  title="Image"
                />
                <CardContent>
                  <Typography component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

AvatarsDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvatarsDemo);
