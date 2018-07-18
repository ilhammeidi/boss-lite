import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from './../../components';
import {
  GridLayout,
  FullWidth,
  Centered,
  Interactive,
  AutoLayout,
  Limitation
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class GridPage extends Component {
  render() {
    const { classes } = this.props;
    const title = brand.name + ' - Layout';
    const description = brand.desc;
    const docSrc = 'routes/Layouts/demos/';
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
        <PapperBlock title="Grid Spacing" desc="The responsive grid focuses on consistent spacing widths, rather than column width. Material design margins and columns follow an 8dp square baseline grid. Spacing can be 8, 16, 24, or 40dp wide.">
          <div>
            <GridLayout />
            <SourceReader componentName={docSrc + 'GridLayout.js'} />
          </div>
        </PapperBlock>

        <PapperBlock title="Full-width" desc="Full-width grids: use fluid columns and breakpoints to determine when a layout needs to change.">
          <div>
            <FullWidth />
            <SourceReader componentName={docSrc + 'FullWidth.js'} />
          </div>
        </PapperBlock>

        <PapperBlock title="Centered Grid" desc="Centered grids: use fixed columns and re-flow the layout when all columns (plus a defined margin) no longer fit on the screen.">
          <div>
            <Centered />
            <SourceReader componentName={docSrc + 'Centered.js'} />
          </div>
        </PapperBlock>

        <PapperBlock title="Interactive" desc="Below is an interactive demo that lets you explore the visual results of the different settings:">
          <div>
            <Interactive />
            <SourceReader componentName={docSrc + 'Interactive.js'} />
          </div>
        </PapperBlock>

        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item md={6} xs={12}>
              <PapperBlock title="Auto Layout" desc="The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.">
                <div>
                  <AutoLayout />
                  <SourceReader componentName={docSrc + 'AutoLayout.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6} xs={12}>
              <PapperBlock title="Limitations" overflowX desc="There is one limitation with the negative margin we use to implement the spacing between items.">
                <div>
                  <Limitation />
                  <SourceReader componentName={docSrc + 'Limitation.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

GridPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridPage);
