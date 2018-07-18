import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import {
  SimpleTooltips,
  PositionedTooltips,
  SimplePopover,
  PopoverPlayground
} from './demos';

class PopoverTooltip extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'routes/UiElements/demos/PopoverTooltip/';
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
        <PapperBlock title="Simple Tooltips" desc="The tooltips are text labels that appear when the user hovers over, focuses on, or touches an element.">
          <div>
            <SimpleTooltips />
            <SourceReader componentName={docSrc + 'SimpleTooltips.js'} />
          </div>
        </PapperBlock>
        <PapperBlock overflowX title="Positioned Tooltips" desc="The Tooltip has 12 placements choice. They don’t have directional arrows; instead, they rely on motion emanating from the source to convey direction.">
          <div>
            <PositionedTooltips />
            <SourceReader componentName={docSrc + 'PositionedTooltips.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Simple Popover" desc="A Popover can be used to display some content on top of another.">
          <div>
            <SimplePopover />
            <SourceReader componentName={docSrc + 'SimplePopover.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Popover playground" desc="Use the radio buttons to adjust the anchorOrigin and transformOrigin positions. You can also set the anchorReference to anchorPosition or anchorEl.">
          <div>
            <PopoverPlayground />
            <SourceReader componentName={docSrc + 'PopoverPlayground.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default PopoverTooltip;
