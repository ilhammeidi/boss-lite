import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from './../../components';
import {
  LineSimple,
  LineVertical,
  LineCustomDot,
  LineCustomLabel,
  LineResponsive
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class DateTime extends React.Component {
  render() {
    const title = brand.name + ' - Chart';
    const description = brand.desc;
    const docSrc = 'routes/Charts/demos/';
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
        <PapperBlock title="Simple Line Chart" desc="" overflowX>
          <div>
            <LineSimple />
            <SourceReader componentName={docSrc + 'LineSimple.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Vertical Line Chart" desc="" overflowX>
          <div>
            <LineVertical />
            <SourceReader componentName={docSrc + 'LineVertical.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Custom Dot Line Chart" desc="" overflowX>
          <div>
            <LineCustomDot />
            <SourceReader componentName={docSrc + 'LineCustomDot.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Custom Label Line Chart" desc="" overflowX>
          <div>
            <LineCustomLabel />
            <SourceReader componentName={docSrc + 'LineCustomLabel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Responsive Line Chart" desc="" overflowX>
          <div>
            <LineResponsive />
            <SourceReader componentName={docSrc + 'LineResponsive.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(DateTime);
