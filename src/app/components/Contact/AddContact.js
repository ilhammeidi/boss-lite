import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import AddContactForm from './AddContactForm';
import FloatingPanel from './../Panel/FloatingPanel';
import styles from './contact-jss';

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      files: []
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    let oldFiles = this.state.files;
    const filesLimit = 2;
    oldFiles = oldFiles.concat(files);
    if (oldFiles.length > filesLimit) {
      console.log('Cannot upload more than ' + filesLimit + ' items.');
    } else {
      this.setState({ img: files[0].preview || '/pic' + files[0].path });
    }
  }

  sendValues = (values) => {
    setTimeout(() => {
      this.props.submit(values, this.state.img);
      this.setState({ img: '' });
    }, 500);
  }

  render() {
    const {
      classes,
      openForm,
      closeForm,
      avatarInit,
      addContact
    } = this.props;
    const { img } = this.state;
    const branch = '';
    return (
      <div>
        <Tooltip title="Add New Contact">
          <Button variant="fab" color="secondary" onClick={() => addContact()} className={classes.addBtn}>
            <Add />
          </Button>
        </Tooltip>
        <FloatingPanel openForm={openForm} branch={branch} closeForm={closeForm}>
          <AddContactForm
            onSubmit={this.sendValues}
            onDrop={this.onDrop}
            imgAvatar={img === '' ? avatarInit : img}
          />
        </FloatingPanel>
      </div>
    );
  }
}

AddContact.propTypes = {
  classes: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  openForm: PropTypes.bool.isRequired,
  avatarInit: PropTypes.string.isRequired,
  closeForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddContact);
