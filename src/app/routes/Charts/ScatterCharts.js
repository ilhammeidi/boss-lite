import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import {
  ScatterSimple,
  ScatterJoinLine,
  ScatterMultiple,
  ScatterCustom,
  ScatterResponsive
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
        <PapperBlock title="Scatter Simple Chart" desc="" overflowX>
          <div>
            <ScatterSimple />
            <SourceReader componentName={docSrc + 'ScatterSimple.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Scatter Join Line Chart" desc="" overflowX>
          <div>
            <ScatterJoinLine />
            <SourceReader componentName={docSrc + 'ScatterJoinLine.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Scatter Multiple Chart" desc="" overflowX>
          <div>
            <ScatterMultiple />
            <SourceReader componentName={docSrc + 'ScatterMultiple.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Scatter Custom Icon Chart" desc="" overflowX>
          <div>
            <ScatterCustom />
            <SourceReader componentName={docSrc + 'ScatterCustom.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Scatter Responsive Chart" desc="" overflowX>
          <div>
            <ScatterResponsive />
            <SourceReader componentName={docSrc + 'ScatterResponsive.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default ScatterCharts;
