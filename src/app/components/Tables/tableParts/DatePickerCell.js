import React from 'react';
import PropTypes from 'prop-types';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import TableCell from '@material-ui/core/TableCell';
import DatePicker from 'material-ui-pickers/DatePicker';
import css from 'ba-components/Table.scss';

class DatePickerCell extends React.Component {
  state = {
    event: {
      target: {
        name: this.props.cellData.type,
        value: this.props.cellData.value,
      }
    }
  }
  handleDateChange = date => {
    this.state.event.target.value = date;
    this.props.updateRow(this.state.event, this.props.branch);
  }
  render() {
    const {
      edited,
      cellData
    } = this.props;
    const { event } = this.state;
    return (
      <TableCell padding="none" className="text-center" textalign="center">
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            keyboard
            clearable
            name={cellData.type}
            className={css.crudInput}
            format="DD/MM/YYYY"
            placeholder="10/10/2018"
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            value={event.target.value}
            disabled={!edited}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
          />
        </MuiPickersUtilsProvider>
      </TableCell>
    );
  }
}

DatePickerCell.propTypes = {
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default DatePickerCell;
