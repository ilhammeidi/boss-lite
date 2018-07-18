import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import {
  PieSimple,
  PieCustomShape,
  PieCustomLabel,
} from './demos';

class PieCharts extends React.Component {
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
        <PapperBlock title="Simple Pie Chart" desc="" overflowX>
          <div>
            <PieSimple />
            <SourceReader componentName={docSrc + 'PieSimple.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Custom Shape Pie Chart" desc="" overflowX>
          <div>
            <PieCustomShape />
            <SourceReader componentName={docSrc + 'PieCustomShape.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Custom Label Pie Chart" desc="" overflowX>
          <div>
            <PieCustomLabel />
            <SourceReader componentName={docSrc + 'PieCustomLabel.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default PieCharts;
