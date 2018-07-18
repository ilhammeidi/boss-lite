import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import { SimpleAccordion, AdvancedAccordion, ControlledAccordion } from './demos';

class Accordion extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'routes/UiElements/demos/Accordion/';
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
        <PapperBlock title="Accordion" desc="Accordion is MUI Expansion Panels contain creation flows and allow lightweight editing of an element.">
          <div>
            <SimpleAccordion />
            <SourceReader componentName={docSrc + 'SimpleAccordion.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Secondary heading and Columns" desc="Multiple columns can be used to structure the content, and a helper text may be added to the panel to assist the user.">
          <div>
            <AdvancedAccordion />
            <SourceReader componentName={docSrc + 'AdvancedAccordion.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Controlled Accordion" desc="Extend the default panel behavior to create an accordion with the ExpansionPanel component.">
          <div>
            <ControlledAccordion />
            <SourceReader componentName={docSrc + 'ControlledAccordion.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default Accordion;
