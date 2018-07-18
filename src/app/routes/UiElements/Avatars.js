import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import { AvatarsDemo, AvatarsPractice } from './demos';

class Avatars extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'routes/UiElements/demos/Avatars/';
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
        <PapperBlock title="Avatars" desc="Avatars are found throughout material design with uses in everything from tables to dialog menus.">
          <div>
            <AvatarsDemo />
            <SourceReader componentName={docSrc + 'AvatarsDemo.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Implemented Avatars" desc="Some examples of components, using an image Avatar, SVG Icon Avatar, Letter and (string) Avatar.">
          <div>
            <AvatarsPractice />
            <SourceReader componentName={docSrc + 'AvatarsPractice.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default Avatars;
