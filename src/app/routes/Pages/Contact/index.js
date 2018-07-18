import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import data from 'ba-utils/contactData';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import {
  fetchAction,
  showDetailAction,
  hideDetailAction,
  submitAction,
  editAction,
  addAction,
  closeAction,
  removeAction,
  addToFavoriteAction,
  searchAction,
  closeNotifAction
} from './../../../actions/ContactActions';
import {
  ContactHeader,
  ContactList,
  ContactDetail,
  AddContact,
  Notification
} from './../../../components';
import styles from './../../../components/Contact/contact-jss';

class Contact extends React.Component {
  componentDidMount() {
    this.props.fetchData(data);
  }

  submitContact = (item, avatar) => {
    this.props.submit(item, avatar);
  }

  render() {
    const title = brand.name + ' - Contact';
    const description = brand.desc;
    const {
      classes,
      dataContact,
      itemSelected,
      showDetail,
      hideDetail,
      avatarInit,
      open,
      showMobileDetail,
      add,
      edit,
      close,
      remove,
      favorite,
      keyword,
      search,
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
          <ContactHeader
            hideDetail={hideDetail}
            addContact={add}
            total={dataContact.size}
            showMobileDetail={showMobileDetail}
          />
          <ContactList
            clippedRight
            itemSelected={itemSelected}
            dataContact={dataContact}
            showDetail={showDetail}
            search={search}
            keyword={keyword}
          />
          <ContactDetail
            showMobileDetail={showMobileDetail}
            dataContact={dataContact}
            itemSelected={itemSelected}
            edit={edit}
            remove={remove}
            favorite={favorite}
          />
        </div>
        <AddContact
          addContact={add}
          openForm={open}
          closeForm={close}
          submit={this.submitContact}
          avatarInit={avatarInit}
        />
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  avatarInit: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired,
  showDetail: PropTypes.func.isRequired,
  hideDetail: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  showMobileDetail: PropTypes.bool.isRequired,
  add: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  favorite: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  dataContact: PropTypes.object.isRequired,
  itemSelected: PropTypes.number.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};

const reducer = 'contact';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  avatarInit: state.getIn([reducer, 'avatarInit']),
  dataContact: state.getIn([reducer, 'contactList']),
  itemSelected: state.getIn([reducer, 'selectedIndex']),
  keyword: state.getIn([reducer, 'keywordValue']),
  open: state.getIn([reducer, 'openFrm']),
  showMobileDetail: state.getIn([reducer, 'showMobileDetail']),
  messageNotif: state.getIn([reducer, 'notifMsg']),
});

const constDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  showDetail: bindActionCreators(showDetailAction, dispatch),
  hideDetail: () => dispatch(hideDetailAction),
  submit: bindActionCreators(submitAction, dispatch),
  edit: bindActionCreators(editAction, dispatch),
  add: () => dispatch(addAction),
  close: () => dispatch(closeAction),
  remove: bindActionCreators(removeAction, dispatch),
  favorite: bindActionCreators(addToFavoriteAction, dispatch),
  search: bindActionCreators(searchAction, dispatch),
  closeNotif: () => dispatch(closeNotifAction),
});

const ContactMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(Contact);

export default withStyles(styles)(ContactMapped);
