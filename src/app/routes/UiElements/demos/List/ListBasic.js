import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
    margin: 10
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

class ListBasic extends PureComponent {
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
          <Grid item md={6} xs={12}>
            <Typography variant="button" className={classes.divider}>Simple List Divider</Typography>
            <div className={classes.root}>
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemText primary="Drafts" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Trash" />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Spam" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="button" className={classes.divider}>Inset Divider</Typography>
            <div className={classes.root}>
              <List>
                <ListItem>
                  <Avatar className={classes.avatarRed}>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <li>
                  <Divider inset />
                </li>
                <ListItem>
                  <Avatar className={classes.avatarGreen}>
                    <WorkIcon />
                  </Avatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <Divider inset component="li" />
                <ListItem>
                  <Avatar className={classes.avatarAmber}>
                    <BeachAccessIcon />
                  </Avatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ListBasic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListBasic);
