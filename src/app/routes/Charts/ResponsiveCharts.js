import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import {
  AreaResponsive,
  BarResponsive,
  LineResponsive,
  ScatterResponsive,
  CompossedResponsive
} from './demos';

class ScatterCharts extends React.Component {
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
        <PapperBlock title="Area Responsive Chart" desc="" overflowX>
          <div>
            <AreaResponsive />
            <SourceReader componentName={docSrc + 'AreaResponsive.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Bar Responsive Chart" desc="" overflowX>
          <div>
            <BarResponsive />
            <SourceReader componentName={docSrc + 'BarResponsive.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Line Responsive Chart" desc="" overflowX>
          <div>
            <LineResponsive />
            <SourceReader componentName={docSrc + 'LineResponsive.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Scatter Responsive Chart" desc="" overflowX>
          <div>
            <ScatterResponsive />
            <SourceReader componentName={docSrc + 'ScatterResponsive.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Compossed Responsive Chart" desc="" overflowX>
          <div>
            <CompossedResponsive />
            <SourceReader componentName={docSrc + 'CompossedResponsive.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default ScatterCharts;
