import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import avatarApi from 'ba-utils/avatars';

const styles = ({
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

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
          <Grid
            item
            md={4}
          >
            <Typography variant="button" className={classes.divider}>Image Avatars</Typography>
            <div className={classes.row}>
              <Avatar alt="Remy Sharp" src={avatarApi[7]} className={classes.avatar} />
              <Avatar
                alt="Adelle Charles"
                src={avatarApi[5]}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            </div>
          </Grid>
          <Grid
            item
            md={4}
          >
            <Typography variant="button" className={classes.divider}>Icon Avatars</Typography>
            <div className={classes.row}>
              <Avatar className={classes.avatar}>
                <FolderIcon />
              </Avatar>
              <Avatar className={classes.pinkAvatar}>
                <PageviewIcon />
              </Avatar>
              <Avatar className={classes.greenAvatar}>
                <AssignmentIcon />
              </Avatar>
            </div>
          </Grid>
          <Grid
            item
            md={4}
          >
            <Typography variant="button" className={classes.divider}>Icon Avatars</Typography>
            <div className={classes.row}>
              <Avatar className={classes.avatar}>H</Avatar>
              <Avatar className={classes.orangeAvatar}>N</Avatar>
              <Avatar className={classes.purpleAvatar}>OP</Avatar>
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
