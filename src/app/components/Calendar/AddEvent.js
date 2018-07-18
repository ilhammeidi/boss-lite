import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import FloatingPanel from './../Panel/FloatingPanel';
import AddEventForm from './AddEventForm';
import styles from './calendar-jss.js';

class AddEvent extends React.Component {
  showResult(values) {
    setTimeout(() => {
      this.props.submit(values);
    }, 500); // simulate server latency
  }

  render() {
    const {
      classes,
      openForm,
      closeForm,
      addEvent
    } = this.props;
    const branch = '';
    return (
      <div>
        <Tooltip title="Add New Event">
          <Button variant="fab" color="secondary" onClick={() => addEvent()} className={classes.addBtn}>
            <Add />
          </Button>
        </Tooltip>
        <FloatingPanel title="Add New Event" openForm={openForm} branch={branch} closeForm={() => closeForm()}>
          <AddEventForm onSubmit={(values) => this.showResult(values)} />
        </FloatingPanel>
      </div>
    );
  }
}

AddEvent.propTypes = {
  classes: PropTypes.object.isRequired,
  openForm: PropTypes.bool.isRequired,
  addEvent: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddEvent);
