import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchAction,
  addAction,
  removeAction,
  updateAction,
  editAction,
  saveAction,
  closeNotifAction,
} from '../../../actions/CrudTbActions';
import { CrudTable, Notification } from './../../../components';

// Reducer Branch
const branch = 'crudTableDemo';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

const anchorTable = [
  {
    name: 'id',
    label: 'Id',
    type: 'static',
    initialValue: '',
    hidden: true
  }, {
    name: 'category',
    label: 'Category',
    type: 'selection',
    initialValue: 'Electronics',
    options: ['Electronics', 'Sporting Goods', 'Apparels', 'Other'],
    width: '150',
    hidden: false
  }, {
    name: 'price',
    label: 'Price',
    type: 'number',
    initialValue: 0,
    width: '100',
    hidden: false
  }, {
    name: 'date',
    label: 'Date Updated',
    type: 'date',
    initialValue: new Date(),
    width: 'auto',
    hidden: false
  }, {
    name: 'time',
    label: 'Time Updated',
    type: 'time',
    initialValue: new Date(),
    width: 'auto',
    hidden: false
  }, {
    name: 'name',
    label: 'Name',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false
  }, {
    name: 'available',
    label: 'Available',
    type: 'toggle',
    initialValue: true,
    width: '100',
    hidden: false
  }, {
    name: 'edited',
    label: '',
    type: 'static',
    initialValue: '',
    hidden: true
  }, {
    name: 'action',
    label: 'Action',
    type: 'static',
    initialValue: '',
    hidden: false
  },
];
const dataApi = [
  {
    id: 1,
    category: 'Sporting Goods',
    price: '49.99',
    date: '4/3/2018',
    time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
    name: 'football',
    available: true,
    edited: false,
  }, {
    id: 2,
    category: 'Other',
    price: '9.99',
    date: '4/2/2018',
    time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
    name: 'baseball',
    available: true,
    edited: false,
  }, {
    id: 3,
    category: 'Sporting Goods',
    price: '29.99',
    date: '4/1/2018',
    time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
    name: 'basketball',
    available: false,
    edited: false,
  }, {
    id: 4,
    category: 'Electronics',
    price: '99.99',
    date: '3/30/2018',
    time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
    name: 'iPod Touch',
    available: true,
    edited: false,
  }, {
    id: 5,
    category: 'Electronics',
    price: '399.99',
    date: '3/29/2018',
    time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
    name: 'iPhone 5',
    available: false,
    edited: false,
  }, {
    id: 6,
    category: 'Electronics',
    price: '199.99',
    date: '3/28/2018',
    time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
    name: 'nexus 7',
    available: true,
    edited: false,
  }
];

class CrudTableDemo extends Component {
  render() {
    const {
      classes,
      fetchData,
      addEmptyRow,
      dataTable,
      removeRow,
      updateRow,
      editRow,
      finishEditRow,
      closeNotif,
      messageNotif,
    } = this.props;
    return (
      <div>
        <Notification close={() => closeNotif(branch)} message={messageNotif} />
        <Paper className={classes.root}>
          <CrudTable
            dataInit={dataApi}
            anchor={anchorTable}
            title="Inventory"
            dataTable={dataTable}
            fetchData={fetchData}
            addEmptyRow={addEmptyRow}
            removeRow={removeRow}
            updateRow={updateRow}
            editRow={editRow}
            finishEditRow={finishEditRow}
            branch={branch}
          />
        </Paper>
      </div>
    );
  }
}

CrudTableDemo.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  dataTable: PropTypes.object.isRequired,
  addEmptyRow: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  finishEditRow: PropTypes.func.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  dataTable: state.getIn([branch, 'dataTable']),
  messageNotif: state.getIn([branch, 'notifMsg']),
});

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  addEmptyRow: bindActionCreators(addAction, dispatch),
  removeRow: bindActionCreators(removeAction, dispatch),
  updateRow: bindActionCreators(updateAction, dispatch),
  editRow: bindActionCreators(editAction, dispatch),
  finishEditRow: bindActionCreators(saveAction, dispatch),
  closeNotif: bindActionCreators(closeNotifAction, dispatch),
});

const CrudTableMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(CrudTableDemo);

export default withStyles(styles)(CrudTableMapped);
