import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import ss from 'ba-utils/screenshoot';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { SourceReader, PapperBlock, MarketingAds } from './../../components';
import { TreeTableDemo } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class TreeTablePage extends Component {
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
        <PapperBlock title="Tree Table Arrow Icon" desc="A simple Tree Collapsed/Expanded Table">
          <div>
            <Paper className={classes.root}>
              <TreeTableDemo />
            </Paper>
            <SourceReader componentName={docSrc + 'TreeTableDemo.js'} />
          </div>
        </PapperBlock>
        <MarketingAds
          title="Tree Table Custom Icon"
          preview={ss.treetable}
          link="http://boss.ux-maestro.com/app/tables/tree-table"
        />
      </div>
    );
  }
}

TreeTablePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TreeTablePage);
