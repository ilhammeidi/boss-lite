import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from './../../components';
import {
  GeneralTypo,
  Heading,
  ListTypo,
  AlignTypo,
  ColouredTypo,
  QuotesDemo
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class Typography extends React.Component {
  render() {
    const { classes } = this.props;
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'routes/UiElements/demos/Typography/';
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
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item md={7} xs={12}>
              <PapperBlock title="Genereal Typo" desc="The Roboto font will not be automatically loaded by Material-UI. The developer is responsible for loading all fonts used in their application. Roboto Font has a few easy ways to get started.">
                <div>
                  <GeneralTypo />
                  <SourceReader componentName={docSrc + 'GeneralTypo.js'} />
                </div>
              </PapperBlock>
              <PapperBlock title="Text Alignment" desc="">
                <div>
                  <AlignTypo />
                  <SourceReader componentName={docSrc + 'AlignTypo.js'} />
                </div>
              </PapperBlock>
              <PapperBlock title="Coloured Text" desc="">
                <div>
                  <ColouredTypo />
                  <SourceReader componentName={docSrc + 'ColouredTypo.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={5} xs={12}>
              <PapperBlock title="Heading" desc="">
                <div>
                  <Heading />
                  <SourceReader componentName={docSrc + 'Heading.js'} />
                </div>
              </PapperBlock>
              <PapperBlock title="List" desc="">
                <div>
                  <ListTypo />
                  <SourceReader componentName={docSrc + 'ListTypo.js'} />
                </div>
              </PapperBlock>
              <PapperBlock title="Quotes" desc="">
                <div>
                  <QuotesDemo />
                  <SourceReader componentName={docSrc + 'QuotesDemo.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Typography.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Typography);
