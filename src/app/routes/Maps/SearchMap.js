import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import { SearchLocation } from './demos';
import Info from './Info';

class SearchMap extends React.Component {
  render() {
    const title = brand.name + ' - Map';
    const description = brand.desc;
    const docSrc = 'routes/Maps/demos/';
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
        <PapperBlock overflowX title="Search Location" desc="Map with search input to find any location">
          <Info />
          <SearchLocation />
          <SourceReader componentName={docSrc + 'SearchLocation.js'} />
        </PapperBlock>
      </div>
    );
  }
}

export default SearchMap;
