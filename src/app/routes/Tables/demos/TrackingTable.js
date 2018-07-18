import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import ss from 'ba-utils/screenshoot';
import { MarketingAds } from './../../../components';

class TrackingTable extends React.Component {
  render() {
    const title = brand.name + ' - Dashboard v2';
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
        <MarketingAds title="Tracking Table" preview={ss.trackingTable} link="http://boss.ux-maestro.com/app/tables/basic-table" />
      </div>
    );
  }
}

export default TrackingTable;
