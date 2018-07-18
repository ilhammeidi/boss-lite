import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import ss from 'ba-utils/screenshoot';
import { withStyles } from '@material-ui/core/styles';
import { MarketingAds } from './../../components';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class DateTime extends React.Component {
  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
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
        <MarketingAds title="WYSIWYG Editor" preview={ss.texteditor} link="http://boss.ux-maestro.com/app/forms/wysiwyg-editor" />
      </div>
    );
  }
}

export default withStyles(styles)(DateTime);
