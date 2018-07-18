import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import {
  StandardCards,
  ControlCards,
  PaperSheet,
  SocialCards,
  EcommerceCards
} from './demos';

class Cards extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'routes/UiElements/demos/Cards/';
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
        <PapperBlock title="Paper" desc="In material design, the physical properties of paper are translated to the screen.">
          <div>
            <PaperSheet />
            <SourceReader componentName={docSrc + 'PaperSheet.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Standard Cards" desc="A card is a sheet of material that serves as an entry point to more detailed information.">
          <div>
            <StandardCards />
            <SourceReader componentName={docSrc + 'StandardCards.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Control Cards" desc="Supplemental actions within the card are explicitly called out using icons, text, and UI controls.">
          <div>
            <ControlCards />
            <SourceReader componentName={docSrc + 'ControlCards.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Social Cards" desc="A Customized material-ui card that contain profile elements">
          <div>
            <SocialCards />
            <SourceReader componentName={docSrc + 'SocialCards.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Ecommerce Cards" desc="A Customized material-ui card that contain product information">
          <div>
            <EcommerceCards />
            <SourceReader componentName={docSrc + 'EcommerceCards.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default Cards;
