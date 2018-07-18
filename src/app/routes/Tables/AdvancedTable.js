import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import ss from 'ba-utils/screenshoot';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock, MarketingAds } from './../../components';
import { AdvTableDemo } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class AdvancedTable extends Component {
  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const docSrc = 'routes/Tables/demos/';
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
        <PapperBlock title="Basic Data Table" desc="This is default example from Material UI. It Demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings.">
          <div>
            <AdvTableDemo />
            <SourceReader componentName={docSrc + 'AdvTableDemo.js'} />
          </div>
        </PapperBlock>
        <MarketingAds title="Advanced Data Table" preview={ss.datatable} link="http://boss.ux-maestro.com/app/tables/data-table" />
      </div>
    );
  }
}

export default withStyles(styles)(AdvancedTable);
