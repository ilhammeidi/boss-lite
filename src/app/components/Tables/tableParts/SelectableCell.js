import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TableCell from '@material-ui/core/TableCell';
import css from 'ba-components/Table.scss';

class SelectableCell extends React.Component {
  handleChange = event => {
    this.props.updateRow(event, this.props.branch);
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const {
      cellData,
      edited,
      options,
    } = this.props;
    return (
      <TableCell padding="none">
        <Select
          name={cellData.type}
          id={cellData.id.toString()}
          className={css.crudInput}
          value={cellData.value}
          onChange={this.handleChange}
          displayEmpty
          disabled={!edited}
          margin="none"
        >
          {options.map((option, index) => <MenuItem value={option} key={index.toString()}>{option}</MenuItem>)}
        </Select>
      </TableCell>
    );
  }
}

SelectableCell.propTypes = {
  options: PropTypes.array.isRequired,
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default SelectableCell;
