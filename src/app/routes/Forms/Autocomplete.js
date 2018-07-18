import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from './../../components';
import {
  AutoSuggest,
  TagSuggestions,
  SelectSuggestions,
  SelectSuggestionTags,
  HighlightSuggest
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class Textbox extends React.Component {
  render() {
    const { classes } = this.props;
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const docSrc = 'routes/Forms/demos/';
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
            <Grid item md={12}>
              <PapperBlock title="Highlight Suggestion" desc="In the following example, we demonstrate how to use react-autosuggest. It's also using autosuggest-highlight for the highlighting logic.">
                <div>
                  <HighlightSuggest />
                  <SourceReader componentName={docSrc + 'HighlightSuggest.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6}>
              <PapperBlock title="Auto Suggestion" desc="The autocomplete is a normal text input enhanced by a panel of suggested options.">
                <div>
                  <AutoSuggest />
                  <SourceReader componentName={docSrc + 'AutoSuggest.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6}>
              <PapperBlock title="Tag Suggestion" desc="In the following example, we demonstrate with tag input and how to use downshift. It mean press Shift + down to show autocomplete">
                <div>
                  <TagSuggestions />
                  <SourceReader componentName={docSrc + 'TagSuggestions.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6}>
              <PapperBlock title="Select Suggestion" desc="In the following example, we demonstrate how to use react-select.">
                <div>
                  <SelectSuggestions />
                  <SourceReader componentName={docSrc + 'SelectSuggestions.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6}>
              <PapperBlock title="Select Tag Suggestion" desc="In the following example, we demonstrate how to combine tag input and react-select.">
                <div>
                  <SelectSuggestionTags />
                  <SourceReader componentName={docSrc + 'SelectSuggestionTags.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Textbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Textbox);
