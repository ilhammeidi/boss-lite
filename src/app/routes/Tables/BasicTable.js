import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Markdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import codeStyle from 'ba-components/Code.scss';
import { SourceReader, PapperBlock } from './../../components';
import {
  StrippedTable,
  HoverTable,
  BorderedTable,
  TrackingTable,
  StatusLabel,
  StatusColorRow,
  EmptyTable
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class BasicTable extends Component {
  render() {
    const { classes } = this.props;
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
        <PapperBlock title="Stripped Table" desc="They (allegedly) aid usability in reading tabular data by offering the user a coloured means of separating and differentiating rows from one another">
          <div >
            <Markdown className={codeStyle.codePre} source="Simply by ``` import tableStyles from 'ba-components/Table.scss'; ``` then add the classNames ``` tableStyles.stripped ```" />
            <StrippedTable />
            <SourceReader componentName={docSrc + 'StrippedTable.js'} />
          </div>
        </PapperBlock>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item md={6} xs={12}>
              <PapperBlock title="Hover Table" desc="Hover tables is addition option that allows you to see what row you selected">
                <div >
                  <Markdown className={codeStyle.codePre} source="Simply by ``` import tableStyles from 'ba-components/Table.scss'; ``` then add the classNames ``` tableStyles.hover ```" />
                  <HoverTable />
                  <SourceReader componentName={docSrc + 'HoverTable.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6} xs={12}>
              <PapperBlock title="Bordered Table" desc="Old is gold, here is old fashion bordered table, we tweaked it a bit so that the headings looks more prominent.">
                <div >
                  <Markdown className={codeStyle.codePre} source="Simply by ``` import tableStyles from 'ba-components/Table.scss'; ``` then add the classNames ``` tableStyles.bordered ```" />
                  <BorderedTable />
                  <SourceReader componentName={docSrc + 'BorderedTable.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
        </div>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item md={6} xs={12}>
              <PapperBlock title="Status Table with Label" desc="">
                <div >
                  <StatusLabel />
                  <SourceReader componentName={docSrc + 'StatusLabel.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6} xs={12}>
              <PapperBlock title="Coloured Row" desc="">
                <div >
                  <StatusColorRow />
                  <SourceReader componentName={docSrc + 'StatusColorRow.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
        </div>
        <div className={classes.root}>
          <TrackingTable />
          <SourceReader componentName={docSrc + 'TrackingTable.js'} />
        </div>
        <PapperBlock title="Empty Table" desc="">
          <div>
            <EmptyTable />
            <SourceReader componentName={docSrc + 'EmptyTable.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTable);
