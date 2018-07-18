import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import {
  BarSimple,
  BarStacked,
  BarMix,
  BarCustom,
  BarPositiveNegative,
  BarCustomLabel,
  BarResponsive
} from './demos';

class BarCharts extends React.Component {
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
        <PapperBlock title="Simple Bar Chart" desc="" overflowX>
          <div>
            <BarSimple />
            <SourceReader componentName={docSrc + 'BarSimple.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Stacked Bar Chart" desc="" overflowX>
          <div>
            <BarStacked />
            <SourceReader componentName={docSrc + 'BarStacked.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Simple Mixing Bar" desc="" overflowX>
          <div>
            <BarMix />
            <SourceReader componentName={docSrc + 'BarMix.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Custom Bar Shape" desc="" overflowX>
          <div>
            <BarCustom />
            <SourceReader componentName={docSrc + 'BarCustom.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Custom Label Bar Chart" desc="" overflowX>
          <div>
            <BarCustomLabel />
            <SourceReader componentName={docSrc + 'BarCustomLabel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Positive Negative Bar Chart" desc="" overflowX>
          <div>
            <BarPositiveNegative />
            <SourceReader componentName={docSrc + 'BarPositiveNegative.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Responsive Bar Chart" desc="" overflowX>
          <div>
            <BarResponsive />
            <SourceReader componentName={docSrc + 'BarResponsive.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default BarCharts;
