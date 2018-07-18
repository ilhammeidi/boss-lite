import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from './../../components';
import { StandardButtons, FloatingButtons, CustomButtons, ComplexButtons } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class Buttons extends React.Component {
  render() {
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
        <PapperBlock title="Standard Buttons" desc="Buttons communicate the action that will occur when the user touches them.">
          <div>
            <StandardButtons />
            <SourceReader componentName={docSrc + 'StandardButtons.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Floating Action Buttons" desc="A floating action button represents the primary action in an application. Shaped like a circled icon floating above the UI, it has an ink wash upon focus and lifts upon selection.">
          <div>
            <FloatingButtons />
            <SourceReader componentName={docSrc + 'FloatingButtons.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Customized Buttons" desc="">
          <div>
            <CustomButtons />
            <SourceReader componentName={docSrc + 'CustomButtons.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Complex Buttons" desc="The Flat Buttons, Raised Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower level component to build custom interactions.">
          <div>
            <ComplexButtons />
            <SourceReader componentName={docSrc + 'ComplexButtons.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(Buttons);
