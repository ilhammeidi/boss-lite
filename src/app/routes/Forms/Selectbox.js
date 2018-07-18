import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from './../../components';
import { SimpleSelectbox, NativeSelectbox, MultipleSelectbox, ControlledSelectbox } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class Selectbox extends React.Component {
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
        <PapperBlock title="Simple Selectbox" desc="Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the emitting element.">
          <div>
            <SimpleSelectbox />
            <SourceReader componentName={docSrc + 'SimpleSelectbox.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Native Selectbox" desc="As the user experience can be improved on mobile using the native select of the platform, we allow such pattern.">
          <div>
            <NativeSelectbox />
            <SourceReader componentName={docSrc + 'NativeSelectbox.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Multiple Selectbox" desc="The Select component can handle multiple selections. It's enabled with the multiple property.">
          <div>
            <MultipleSelectbox />
            <SourceReader componentName={docSrc + 'MultipleSelectbox.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Controlled open Select" desc="">
          <div>
            <ControlledSelectbox />
            <SourceReader componentName={docSrc + 'ContorlledSelectbox.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(Selectbox);
