import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import tableStyles from 'ba-components/Table.scss';
import EnhancedTableHead from './../../components/Tables/tableParts/TableHeader';
import EnhancedTableToolbar from './../../components/Tables/tableParts/TableToolbar';
import { PapperBlock } from './../../components';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  demo: {
    height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    backgroundColor: theme.palette.secondary.light,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  settings: {
    padding: 30
  },
});

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return {
    id: counter,
    name,
    calories,
    fat,
    carbs,
    protein
  };
}

class InteractiveGrid extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      columnData: [
        {
          id: 'name',
          numeric: false,
          disablePadding: false,
          label: 'Dessert (100g serving)'
        }, {
          id: 'calories',
          numeric: true,
          disablePadding: false,
          label: 'Calories'
        }, {
          id: 'fat',
          numeric: true,
          disablePadding: false,
          label: 'Fat (g)'
        }, {
          id: 'carbs',
          numeric: true,
          disablePadding: false,
          label: 'Carbs (g)'
        }, {
          id: 'protein',
          numeric: true,
          disablePadding: false,
          label: 'Protein (g)'
        },
      ],
      data: [
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Donut', 452, 25.0, 51, 4.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Honeycomb', 408, 3.2, 87, 6.5),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Jelly Bean', 375, 0.0, 94, 0.0),
        createData('KitKat', 518, 26.0, 65, 7.0),
        createData('Lollipop', 392, 0.2, 98, 0.0),
        createData('Marshmallow', 318, 0, 81, 2.0),
        createData('Nougat', 360, 19.0, 9, 37.0),
        createData('Oreo', 437, 18.0, 63, 4.0),
      ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
      page: 0,
      rowsPerPage: 5,
      defaultPerPage: 5,
      filterText: '',
      size: 'medium',
      bordered: false,
      stripped: true,
      hovered: false,
      toolbar: true,
      checkcell: false,
      pagination: true
    };
  }

  handleChangeRadio = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleChangeCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data, order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.state.data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    if (!this.state.checkcell) {
      return;
    }
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  handleUserInput(value) {
    // Show all item first
    if (value !== '') {
      this.setState({ rowsPerPage: this.state.data.length });
    } else {
      this.setState({ rowsPerPage: this.state.defaultPerPage });
    }

    // Show result base on keyword
    this.setState({ filterText: value.toLowerCase() });
  }

  render() {
    const { classes } = this.props;
    const {
      data,
      order,
      orderBy,
      selected,
      rowsPerPage,
      page,
      filterText,
      size,
      columnData,
      toolbar, pagination, checkcell,
      bordered, stripped, hovered
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - (page * rowsPerPage));
    const renderCell = (dataArray, keyArray) => keyArray.map((itemCell, index) => (
      <TableCell numeric={itemCell.numeric} key={index.toString()}>{dataArray[itemCell.id]}</TableCell>
    ));
    return (
      <PapperBlock title="Table Playground" desc="">
        <div>
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <Grid container className={classes.settings}>
                <Grid item xs={6} sm={4}>
                  <FormControl component="fieldset">
                    <FormLabel>Size</FormLabel>
                    <RadioGroup
                      name="size"
                      aria-label="size"
                      value={size}
                      onChange={this.handleChangeRadio('size')}
                    >
                      <FormControlLabel value="small" control={<Radio />} label="Small" />
                      <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                      <FormControlLabel value="big" control={<Radio />} label="Big" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <FormControl component="fieldset">
                    <FormLabel>Style</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.bordered}
                            onChange={this.handleChangeCheck('bordered')}
                            value="bordered"
                          />
                        }
                        label="Bordered"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.stripped}
                            onChange={this.handleChangeCheck('stripped')}
                            value="stripped"
                          />
                        }
                        label="Strppied"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.hovered}
                            onChange={this.handleChangeCheck('hovered')}
                            value="hovered"
                          />
                        }
                        label="Hovered"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <FormControl component="fieldset">
                    <FormLabel>Component</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.toolbar}
                            onChange={this.handleChangeCheck('toolbar')}
                            value="toolbar"
                          />
                        }
                        label="Toolbar"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.checkcell}
                            onChange={this.handleChangeCheck('checkcell')}
                            value="checkcell"
                          />
                        }
                        label="Checkbox"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.pagination}
                            onChange={this.handleChangeCheck('pagination')}
                            value="pagination"
                          />
                        }
                        label="Pagination"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.root}>
                {toolbar &&
                  <EnhancedTableToolbar
                    numSelected={selected.length}
                    filterText={filterText}
                    onUserInput={(event) => this.handleUserInput(event)}
                  />
                }
                <div className={classes.tableWrapper}>
                  <Table className={
                    classNames(
                      classes.table,
                      hovered && tableStyles.hover,
                      stripped && tableStyles.stripped,
                      bordered && tableStyles.bordered,
                      tableStyles[size]
                    )}
                  >
                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={this.handleSelectAllClick}
                      onRequestSort={this.handleRequestSort}
                      rowCount={data.length}
                      columnData={columnData}
                      checkcell={checkcell}
                    />
                    <TableBody>
                      {data.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map(n => {
                        const isSelected = this.isSelected(n.id);
                        if (n.name.toLowerCase().indexOf(filterText) === -1) {
                          return false;
                        }
                        return (
                          <TableRow
                            onClick={event => this.handleClick(event, n.id)}
                            role="checkbox"
                            aria-checked={isSelected}
                            tabIndex={-1}
                            key={n.id}
                            selected={isSelected}
                          >
                            {checkcell &&
                              <TableCell padding="checkbox">
                                <Checkbox checked={isSelected} />
                              </TableCell>
                            }
                            {renderCell(n, columnData)}
                          </TableRow>
                        );
                      })}
                      {emptyRows > 0 && (
                        <TableRow style={{ height: 49 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
                {pagination &&
                  <TablePagination
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                      'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                      'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  />
                }
              </Paper>
            </Grid>
          </Grid>
        </div>
      </PapperBlock>
    );
  }
}

InteractiveGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveGrid);
