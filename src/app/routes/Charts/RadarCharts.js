import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import {
  RadarSimple,
  DoubleRadar
} from './demos';

class RadarCharts extends React.Component {
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
        <PapperBlock title="Simple Radar Chart" desc="" overflowX>
          <div>
            <RadarSimple />
            <SourceReader componentName={docSrc + 'RadarSimple.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Double Radar Chart" desc="" overflowX>
          <div>
            <DoubleRadar />
            <SourceReader componentName={docSrc + 'DoubleRadar.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default RadarCharts;
