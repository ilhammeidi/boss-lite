import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
import Add from '@material-ui/icons/Add';
import styles from './contact-jss';

class ContactHeader extends React.Component {
  render() {
    const {
      classes,
      addContact,
      total,
      hideDetail,
      showMobileDetail
    } = this.props;
    return (
      <AppBar
        position="absolute"
        className={classes.appBar}
      >
        <Toolbar>
          {showMobileDetail && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => hideDetail()}
              className={classes.navIconHide}
            >
              <ArrowBack />
            </IconButton>
          )}
          <Typography variant="subheading" className={classes.title} color="inherit" noWrap>
            <PermContactCalendar /> Contacts ({total})
          </Typography>
          <Button onClick={() => addContact()} variant="outlined" color="inherit" className={classes.button}>
            <Add /> Add New
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

ContactHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  showMobileDetail: PropTypes.bool.isRequired,
  addContact: PropTypes.func.isRequired,
  hideDetail: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default withStyles(styles)(ContactHeader);
