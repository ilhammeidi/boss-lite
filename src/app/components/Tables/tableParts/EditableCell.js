import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import css from 'ba-components/Table.scss';

class EditableCell extends React.Component {
  handleUpdate(event) {
    event.persist();
    this.props.updateRow(event, this.props.branch);
  }
  render() {
    const {
      cellData,
      edited,
      inputType
    } = this.props;
    switch (inputType) {
      case 'text':
        return (
          <TableCell padding="none">
            <Input
              placeholder={cellData.type}
              name={cellData.type}
              className={css.crudInput}
              id={cellData.id.toString()}
              value={cellData.value}
              onChange={(event) => this.handleUpdate(event)}
              disabled={!edited}
              margin="none"
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </TableCell>
        );
      case 'number':
        return (
          <TableCell padding="none">
            <TextField
              id={cellData.id.toString()}
              name={cellData.type}
              className={css.crudInput}
              value={cellData.value}
              onChange={(event) => this.handleUpdate(event)}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="none"
              disabled={!edited}
            />
          </TableCell>
        );
      default:
        return (
          <TableCell padding="none">
            <Input
              placeholder={cellData.type}
              name={cellData.type}
              className={css.crudInput}
              id={cellData.id.toString()}
              value={cellData.value}
              onChange={(event) => this.handleUpdate(event)}
              disabled={!edited}
              margin="none"
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </TableCell>
        );
    }
  }
}

EditableCell.propTypes = {
  inputType: PropTypes.string.isRequired,
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default EditableCell;
