import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ExpandLess from '@material-ui/icons/KeyboardArrowRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Add from '@material-ui/icons/AddCircle';
import Remove from '@material-ui/icons/RemoveCircleOutline';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  hideRow: {
    display: 'none'
  },
  anchor: {
    cursor: 'pointer'
  },
  icon: {
    top: 5,
    position: 'relative',
    left: -5
  }
});

let RenderRow = props => {
  const {
    classes,
    toggleTree,
    treeOpen,
    item,
    parent,
    arrowMore,
    icon,
    branch
  } = props;

  const keyID = item.id;
  const dataBody = Object.keys(item);
  const dataBodyVal = Object.values(item);

  const renderIconMore = (iconName) => {
    if (iconName === 'arrow') {
      return <ExpandMore className={classes.icon} />;
    }
    return <Remove className={classes.icon} />;
  };

  const renderIconLess = (iconName) => {
    if (iconName === 'arrow') {
      return <ExpandLess className={classes.icon} />;
    }
    return <Add className={classes.icon} />;
  };

  const renderCell = (dataArray, parentCell) => dataArray.map((itemCell, index) => {
    if (index < 1) {
      if (parentCell) {
        return (
          <TableCell key={index.toString()} style={{ paddingLeft: (keyID.split('_').length) * 20 }}>
            {arrowMore.indexOf(keyID) > -1 ? renderIconMore(icon) : renderIconLess(icon)}
            {keyID}
          </TableCell>
        );
      }
      return (
        <TableCell key={index.toString()} style={{ paddingLeft: (keyID.split('_').length) * 20 }}>{keyID}</TableCell>
      );
    }

    if (itemCell !== 'child') {
      return (
        <TableCell padding="dense" key={index.toString()}>{dataBodyVal[index]}</TableCell>
      );
    }

    return false;
  });

  const row = parent ? (
    <TableRow
      key={keyID}
      className={treeOpen.indexOf(keyID) < 0 && keyID.indexOf('_') > -1 ? classes.hideRow : classes.anchor}
      onClick={() => toggleTree(keyID, item.child, branch)}
    >
      {renderCell(dataBody, true)}
    </TableRow>
  ) : (
    <TableRow
      key={keyID}
      className={treeOpen.indexOf(keyID) < 0 && keyID.indexOf('_') > -1 ? classes.hideRow : ''}
    >
      {renderCell(dataBody, false)}
    </TableRow>
  );

  return [row];
};

RenderRow.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  parent: PropTypes.bool.isRequired,
  toggleTree: PropTypes.func.isRequired,
  treeOpen: PropTypes.object.isRequired,
  arrowMore: PropTypes.object.isRequired,
  branch: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

RenderRow = withStyles(styles)(RenderRow);

class TreeTable extends React.Component {
  render() {
    const {
      classes,
      dataTable,
      icon,
      treeOpen,
      arrowMore,
      toggleTree,
      branch
    } = this.props;
    const parentRow = true;
    const getData = dataArray => dataArray.map((item, index) => {
      if (item.child) {
        return [
          <RenderRow
            icon={icon}
            treeOpen={treeOpen}
            arrowMore={arrowMore}
            toggleTree={toggleTree}
            item={item}
            key={index.toString()}
            parent={parentRow}
            branch={branch}
          />,
          getData(item.child)
        ];
      }
      return (
        <RenderRow
          icon={icon}
          item={item}
          treeOpen={treeOpen}
          arrowMore={arrowMore}
          toggleTree={toggleTree}
          key={index.toString()}
          branch={branch}
          parent={false}
        />
      );
    });

    const getHead = dataArray => dataArray.map((item, index) =>
      <TableCell padding="dense" key={index.toString()}>{item.label}</TableCell>
    );

    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            { getHead(dataTable.head) }
          </TableRow>
        </TableHead>
        <TableBody>
          { getData(dataTable.body) }
        </TableBody>
      </Table>
    );
  }
}

TreeTable.propTypes = {
  classes: PropTypes.object.isRequired,
  dataTable: PropTypes.object.isRequired,
  treeOpen: PropTypes.object.isRequired,
  toggleTree: PropTypes.func.isRequired,
  arrowMore: PropTypes.object.isRequired,
  branch: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default withStyles(styles)(TreeTable);
