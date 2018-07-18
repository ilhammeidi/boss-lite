import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import LocalPhone from '@material-ui/icons/LocalPhone';
import LocationOn from '@material-ui/icons/LocationOn';
import styles from './cardStyle-jss';

class IdentityCard extends React.Component {
  render() {
    const {
      classes,
      title,
      name,
      avatar,
      phone,
      address,
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="subheading">{title}</Typography>
          <Divider className={classes.divider} />
          <ListItem>
            <Avatar
              alt={name}
              src={avatar}
              className={classes.avatar}
            />
            <ListItemText primary="Name" secondary={name} />
          </ListItem>
          <ListItem>
            <Avatar>
              <LocalPhone />
            </Avatar>
            <ListItemText primary="Phone" secondary={phone} />
          </ListItem>
          <ListItem>
            <Avatar>
              <LocationOn />
            </Avatar>
            <ListItemText primary="Address" secondary={address} />
          </ListItem>
        </CardContent>
      </Card>
    );
  }
}

IdentityCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default withStyles(styles)(IdentityCard);
