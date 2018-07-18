import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import events from 'ba-utils/eventData';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import 'ba-components/vendors/react-big-calendar/react-big-calendar.css';
import { EventCalendar, DetailEvent, AddEvent, Notification } from './../../../components';
import {
  fetchAction,
  addAction,
  discardAction,
  submitAction,
  deleteAction,
  closeNotifAction
} from './../../../actions/CalendarEventActions';

const styles = {
  root: {
    display: 'block'
  }
};

class Calendar extends React.Component {
  state = {
    anchorEl: null,
    event: null,
  };

  componentDidMount() {
    this.props.fetchEventsData(events);
  }

  handleClick = event => {
    setTimeout(() => {
      const target = document.getElementsByClassName('rbc-selected')[0];
      this.setState({
        event,
        anchorEl: target,
      });
    }, 200);
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const title = brand.name + ' - Calendar';
    const description = brand.desc;
    const { anchorEl, event } = this.state;
    const {
      classes,
      eventData,
      openFrm,
      addEvent,
      discardEvent,
      submit,
      remove,
      closeNotif,
      messageNotif
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <Notification close={() => closeNotif()} message={messageNotif} />
        <div className={classes.root}>
          <EventCalendar events={eventData.toJS()} handleEventClick={this.handleClick} />
          <DetailEvent
            event={event}
            anchorEl={anchorEl}
            close={this.handleClose}
            remove={remove}
          />
          <AddEvent
            openForm={openFrm}
            addEvent={addEvent}
            closeForm={discardEvent}
            submit={submit}
          />
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
  eventData: PropTypes.object.isRequired,
  fetchEventsData: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  discardEvent: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  openFrm: PropTypes.bool.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};

const reducer = 'calendar';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  eventData: state.getIn([reducer, 'events']),
  openFrm: state.getIn([reducer, 'openFrm']),
  messageNotif: state.getIn([reducer, 'notifMsg']),
});

const constDispatchToProps = dispatch => ({
  fetchEventsData: bindActionCreators(fetchAction, dispatch),
  submit: bindActionCreators(submitAction, dispatch),
  remove: bindActionCreators(deleteAction, dispatch),
  addEvent: () => dispatch(addAction),
  discardEvent: () => dispatch(discardAction),
  closeNotif: () => dispatch(closeNotifAction),
});

const CalendarMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(Calendar);

export default withStyles(styles)(CalendarMapped);
