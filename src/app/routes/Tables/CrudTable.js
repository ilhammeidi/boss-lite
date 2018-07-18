import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ss from 'ba-utils/screenshoot';
import { SourceReader, PapperBlock, MarketingAds } from './../../components';
import { CrudTableDemo } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class CrudTablePage extends Component {
  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const docSrc = 'routes/Tables/demos/';
    const { classes } = this.props;
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
        <PapperBlock title="CRUD Table" desc="The CRUD Table supports editing features including creating, updating and deleting rows. The editing state contains information about rows currently being edited, changes applied to a particular row, and rows that have been deleted and created.">
          <div>
            <Paper className={classes.root}>
              <CrudTableDemo />
            </Paper>
            <SourceReader componentName={docSrc + 'CrudTableDemo.js'} />
          </div>
        </PapperBlock>
        <MarketingAds title="Crud Table Form" preview={ss.crudTable} link="http://boss.ux-maestro.com/app/tables/crud-table" />
      </div>
    );
  }
}

CrudTablePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CrudTablePage);
