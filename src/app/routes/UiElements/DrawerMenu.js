import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from './../../components';
import {
  TemporaryDrawer,
  SwipeDrawer,
  PermanentDrawer,
  PersistentDrawer,
  MiniDrawer,
  BasicMenu,
  DropdownMenu,
  StyledMenu,
  MenuTransition
} from './demos';

class DrawerMenu extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'routes/UiElements/demos/DrawerMenu/';
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
        <Grid container spacing={16}>
          <Grid item md={6}>
            <PapperBlock title="Temporary drawer" desc="Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.">
              <div>
                <TemporaryDrawer />
                <SourceReader componentName={docSrc + 'TemporaryDrawer.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock title="Swipeable Temporary drawer" desc="You can make the drawer swipeable with the SwipeableDrawer component.">
              <div>
                <SwipeDrawer />
                <SourceReader componentName={docSrc + 'SwipeDrawer.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <PapperBlock title="Permanent drawer" desc="Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed.">
          <div>
            <PermanentDrawer />
            <SourceReader componentName={docSrc + 'PermanentDrawer.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Persistent drawer" desc="Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface elevation as the content. It is closed by default and opens by selecting the menu icon, and stays open until closed by the user.">
          <div>
            <PersistentDrawer />
            <SourceReader componentName={docSrc + 'PersistentDrawer.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Mini variant drawer" desc="In this variation, the persistent navigation drawer changes its width. Its resting state is as a mini-drawer at the same elevation as the content, clipped by the app bar.">
          <div>
            <MiniDrawer />
            <SourceReader componentName={docSrc + 'MiniDrawer.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Basic Menu" desc="Basic menus open over the anchor element by default (this option can be changed via props). When close to a screen edge, simple menus vertically realign to make all menu items are completely visible.">
          <div>
            <BasicMenu />
            <SourceReader componentName={docSrc + 'BasicMenu.js'} />
          </div>
        </PapperBlock>
        <Grid container spacing={16}>
          <Grid item md={6}>
            <PapperBlock title="Selected menus" desc="If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element.">
              <div>
                <DropdownMenu />
                <SourceReader componentName={docSrc + 'DropdownMenu.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock title="Styled Menu" desc="The MenuItem is a wrapper around ListItem with some additional styles.">
              <div>
                <StyledMenu />
                <SourceReader componentName={docSrc + 'StyledMenu.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <PapperBlock title="Transition" desc="Use a different transition altogether.">
          <div>
            <MenuTransition />
            <SourceReader componentName={docSrc + 'MenuTransition.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default DrawerMenu;
