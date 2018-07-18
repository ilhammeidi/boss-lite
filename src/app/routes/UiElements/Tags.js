import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import { BasicTags, ArrayTags } from './demos';

class Tags extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'routes/UiElements/demos/Tags/';
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
        <PapperBlock title="Basic Tags" desc="Tags represent complex entities in small blocks, such as a contact.">
          <div>
            <BasicTags />
            <SourceReader componentName={docSrc + 'BasicTags.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Array Tags" desc="An example of rendering multiple Tags from an array of values. ">
          <div>
            <ArrayTags />
            <SourceReader componentName={docSrc + 'ArrayTags.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default Tags;
