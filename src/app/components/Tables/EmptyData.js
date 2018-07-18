import React from 'react';
import tableStyles from 'ba-components/Table.scss';
import TableIcon from '@material-ui/icons/Apps';

function EmptyData() {
  return (
    <div className={tableStyles.nodata}>
      <TableIcon />
      No Data
    </div>
  );
}

export default EmptyData;
