import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: 10
  },
});

class ListControl extends React.Component {
  state = {
    checked: [0],
    checked2: [1],
    checked3: ['wifi'],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
      checked2: newChecked,
      checked3: newChecked,
    });
  };

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
          <Grid item md={4} xs={12}>
            <Typography variant="button" className={classes.divider}>Checkbox</Typography>
            <div className={classes.root}>
              <List>
                {[0, 1, 2, 3].map(value => (
                  <ListItem
                    key={value}
                    role={undefined}
                    dense
                    button
                    onClick={this.handleToggle(value)}
                    className={classes.listItem}
                  >
                    <Checkbox
                      checked={this.state.checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                    />
                    <ListItemText primary={`Line item ${value + 1}`} />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Comments">
                        <CommentIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="button" className={classes.divider}>Checkbox</Typography>
            <div className={classes.root}>
              <List>
                {[0, 1, 2, 3].map(value => (
                  <ListItem key={value} dense button className={classes.listItem}>
                    <Avatar alt="Remy Sharp" src="/images/pp_boy.svg" />
                    <ListItemText primary={`Line item ${value + 1}`} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        onChange={this.handleToggle(value)}
                        checked={this.state.checked2.indexOf(value) !== -1}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="button" className={classes.divider}>Switch</Typography>
            <div className={classes.root}>
              <List subheader={<ListSubheader>Settings</ListSubheader>}>
                <ListItem>
                  <ListItemIcon>
                    <WifiIcon />
                  </ListItemIcon>
                  <ListItemText primary="Wi-Fi" />
                  <ListItemSecondaryAction>
                    <Switch
                      onChange={this.handleToggle('wifi')}
                      checked={this.state.checked3.indexOf('wifi') !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BluetoothIcon />
                  </ListItemIcon>
                  <ListItemText primary="Bluetooth" />
                  <ListItemSecondaryAction>
                    <Switch
                      onChange={this.handleToggle('bluetooth')}
                      checked={this.state.checked3.indexOf('bluetooth') !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ListControl.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListControl);
