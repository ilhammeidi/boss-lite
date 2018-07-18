import React from 'react';
import PropTypes from 'prop-types';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import TableCell from '@material-ui/core/TableCell';
import { TimePicker } from 'material-ui-pickers';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import css from 'ba-components/Table.scss';

class TimePickerCell extends React.Component {
  state = {
    event: {
      target: {
        name: this.props.cellData.type,
        value: this.props.cellData.value,
      }
    }
  }
  handleTimeChange = date => {
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
      <TableCell padding="none">
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <TimePicker
            name={cellData.type}
            className={css.crudInput}
            mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
            placeholder="08:00 AM"
            value={event.target.value}
            disabled={!edited}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Icon>access_time</Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={this.handleTimeChange}
          />
        </MuiPickersUtilsProvider>
      </TableCell>
    );
  }
}

TimePickerCell.propTypes = {
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default TimePickerCell;
