import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import ss from 'ba-utils/screenshoot';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock, MarketingAds } from './../../components';
import {
  ModalDemo,
  AlertDialog,
  SelectDialog,
  SelectRadioDialog,
  FormDialog,
  FullScreenDialog,
} from './demos';

class DialogModal extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'routes/UiElements/demos/DialogModal/';
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
        <PapperBlock title="Modals" desc="The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.">
          <div>
            <ModalDemo />
            <SourceReader componentName={docSrc + 'ModalDemo.js'} />
          </div>
        </PapperBlock>
        <MarketingAds title="Image Popup" preview={ss.imageLightbox} link="http://boss.ux-maestro.com/app/ui/dialog-modal" />
        <PapperBlock title="Alerts" desc="Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.">
          <div>
            <AlertDialog />
            <SourceReader componentName={docSrc + 'AlertDialog.js'} />
          </div>
        </PapperBlock>
        <Grid container spacing={16}>
          <Grid item md={6}>
            <PapperBlock title="Selection Dialog" desc="Choosing an option immediately commits the option and closes the menu">
              <div>
                <SelectDialog />
                <SourceReader componentName={docSrc + 'SelectDialog.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock title="Selection Radio Dialog" desc="In this example, users can listen to multiple ringtones but only make a final selection upon touching “OK.”">
              <div>
                <SelectRadioDialog />
                <SourceReader componentName={docSrc + 'SelectRadioDialog.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <PapperBlock title="Form dialogs" desc="Form dialogs allow users to fill out form fields within a dialog.">
          <div>
            <FormDialog />
            <SourceReader componentName={docSrc + 'FormDialog.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Full Screen (Responsive)" desc="You may make a Dialog responsively full screen the dialog using withMobileDialog. By default, withMobileDialog()(Dialog) responsively full screens at or below the sm screen size.">
          <div>
            <FullScreenDialog />
            <SourceReader componentName={docSrc + 'FullScreenDialog.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default DialogModal;
