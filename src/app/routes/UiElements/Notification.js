import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { SourceReader, PapperBlock } from './../../components';
import { SimpleNotif, StyledNotif, TransitionNotif } from './demos';

class Notification extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'routes/UiElements/demos/Notification/';
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
        <PapperBlock title="Snackbars/Notification" desc="Snackbars provide brief feedback about an operation through a message - typically at the bottom of the screen.">
          <div>
            <SimpleNotif />
            <SourceReader componentName={docSrc + 'SimpleNotif.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Styled Notification" desc="Some snackbars with varying message style. And some snackbars with varying message length.">
          <div>
            <StyledNotif />
            <SourceReader componentName={docSrc + 'StyledNotif.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Transition" desc="Per Google's guidelines, when a second snackbar is triggered while the first is displayed, the first should start the contraction motion downwards before the second one animates upwards.">
          <div>
            <TransitionNotif />
            <SourceReader componentName={docSrc + 'TransitionNotif.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default Notification;
