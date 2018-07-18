import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocalPhone from '@material-ui/icons/LocalPhone';
import Email from '@material-ui/icons/Email';
import Smartphone from '@material-ui/icons/Smartphone';
import LocationOn from '@material-ui/icons/LocationOn';
import Work from '@material-ui/icons/Work';
import Language from '@material-ui/icons/Language';
import Divider from '@material-ui/core/Divider';
import styles from './contact-jss';

const optionsOpt = [
  'Block Contact',
  'Delete Contact',
  'Option 1',
  'Option 2',
  'Option 3',
];

const ITEM_HEIGHT = 48;

class ContactDetail extends React.Component {
  state = {
    anchorElOpt: null,
  };

  handleClickOpt = event => {
    this.setState({ anchorElOpt: event.currentTarget });
  };

  handleCloseOpt = () => {
    this.setState({ anchorElOpt: null });
  };

  deleteContact = (item) => {
    this.props.remove(item);
    this.setState({ anchorElOpt: null });
  }

  render() {
    const {
      classes,
      dataContact,
      itemSelected,
      edit,
      favorite,
      showMobileDetail
    } = this.props;
    const { anchorElOpt } = this.state;
    return (
      <main className={classNames(classes.content, showMobileDetail ? classes.detailPopup : '')}>
        <section className={classes.cover}>
          <div className={classes.opt}>
            <IconButton className={classes.favorite} aria-label="Favorite" onClick={() => favorite(dataContact.get(itemSelected))}>
              {dataContact.getIn([itemSelected, 'favorited']) ? (<Star />) : <StarBorder />}
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => edit(dataContact.get(itemSelected))}>
              <Edit />
            </IconButton>
            <IconButton
              aria-label="More"
              aria-owns={anchorElOpt ? 'long-menu' : null}
              aria-haspopup="true"
              className={classes.button}
              onClick={this.handleClickOpt}
            >
              <MoreVertIcon />
            </IconButton>
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
              {optionsOpt.map(option => {
                if (option === 'Delete Contact') {
                  return (
                    <MenuItem key={option} selected={option === 'Edit Profile'} onClick={() => this.deleteContact(dataContact.get(itemSelected))}>
                      {option}
                    </MenuItem>
                  );
                }
                return (
                  <MenuItem key={option} selected={option === 'Edit Profile'} onClick={this.handleCloseOpt}>
                    {option}
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
          <Avatar alt={dataContact.getIn([itemSelected, 'name'])} src={dataContact.getIn([itemSelected, 'avatar'])} className={classes.avatar} />
          <Typography className={classes.userName} variant="display1">
            {dataContact.getIn([itemSelected, 'name'])}
            <Typography variant="caption">
              {dataContact.getIn([itemSelected, 'title'])}
            </Typography>
          </Typography>
        </section>
        <div>
          <List>
            <ListItem>
              <Avatar className={classes.blueIcon}>
                <LocalPhone />
              </Avatar>
              <ListItemText primary={dataContact.getIn([itemSelected, 'phone'])} secondary="Phone" />
            </ListItem>
            <Divider inset />
            <ListItem>
              <Avatar className={classes.amberIcon}>
                <Smartphone />
              </Avatar>
              <ListItemText primary={dataContact.getIn([itemSelected, 'secondaryPhone'])} secondary="Secondary Phone" />
            </ListItem>
            <Divider inset />
            <ListItem>
              <Avatar className={classes.tealIcon}>
                <Email />
              </Avatar>
              <ListItemText primary={dataContact.getIn([itemSelected, 'personalEmail'])} secondary="Personal Email" />
            </ListItem>
            <Divider inset />
            <ListItem>
              <Avatar className={classes.brownIcon}>
                <Work />
              </Avatar>
              <ListItemText primary={dataContact.getIn([itemSelected, 'companyEmail'])} secondary="Company Email" />
            </ListItem>
            <Divider inset />
            <ListItem>
              <Avatar className={classes.redIcon}>
                <LocationOn />
              </Avatar>
              <ListItemText primary={dataContact.getIn([itemSelected, 'address'])} secondary="Address" />
            </ListItem>
            <Divider inset />
            <ListItem>
              <Avatar className={classes.purpleIcon}>
                <Language />
              </Avatar>
              <ListItemText primary={dataContact.getIn([itemSelected, 'website'])} secondary="Website" />
            </ListItem>
          </List>
        </div>
      </main>
    );
  }
}

ContactDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  showMobileDetail: PropTypes.bool.isRequired,
  dataContact: PropTypes.object.isRequired,
  itemSelected: PropTypes.number.isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  favorite: PropTypes.func.isRequired,
};

export default withStyles(styles)(ContactDetail);
