import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import { ClassicBreadcrumbs, PaperBreadcrumbs } from './demos';

class BreadCrumbs extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'routes/UiElements/demos/Breadcrumbs/';
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
        <PapperBlock title="Classic Breadcrumb" desc="Breadcrumb is one of navigation component. With this User can jump to parent, children or grand-children page as long in a single inheritance.This example is designed with classic style separator">
          <div>
            <ClassicBreadcrumbs />
            <SourceReader componentName={docSrc + 'ClassicBreadcrumbs.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Paper Breadcrumb" desc="">
          <div>
            <PaperBreadcrumbs />
            <SourceReader componentName={docSrc + 'PaperBreadcrumbs.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default BreadCrumbs;
