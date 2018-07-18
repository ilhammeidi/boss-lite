import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import classNames from 'classnames';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import css from 'ba-components/Table.scss';

class ToggleCell extends React.Component {
  state = {
    isChecked: this.props.cellData.value
  };
  handleChange = event => {
    this.setState({ isChecked: event.target.checked });
    this.props.updateRow(event, this.props.branch);
  };
  render() {
    const {
      cellData,
      edited,
    } = this.props;
    return (
      <TableCell className={css.toggleCell} padding="none" textalign="center">
        <div className={classNames(css.coverReadonly, !edited ? css.show : '')} />
        <FormControlLabel
          control={
            <Switch
              name={cellData.type}
              id={cellData.id.toString()}
              className={css.crudInput}
              checked={this.state.isChecked}
              onChange={this.handleChange}
              value={cellData.value.toString()}
            />
          }
        />
      </TableCell>
    );
  }
}

ToggleCell.propTypes = {
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default ToggleCell;
