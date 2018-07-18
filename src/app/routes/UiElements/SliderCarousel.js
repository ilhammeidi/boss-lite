import React from 'react';
import { Helmet } from 'react-helmet';
import ss from 'ba-utils/screenshoot';
import brand from 'ba-utils/brand';
import { MarketingAds } from './../../components';

class SliderCarousel extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
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
        <MarketingAds title="Slider" preview={ss.sliderCarousel} link="http://boss.ux-maestro.com/app/ui/slider-carousel" />
        <MarketingAds title="Carousel" preview={ss.sliderCarousel2} link="http://boss.ux-maestro.com/app/ui/slider-carousel" />
      </div>
    );
  }
}

export default SliderCarousel;
