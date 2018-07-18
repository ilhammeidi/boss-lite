import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import brand from 'ba-utils/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import imgApi from 'ba-utils/images';
import avatarApi from 'ba-utils/avatars';
import styles from './dashboard-jss';
import {
  CounterIconsWidget,
  AreaChartWidget,
  CarouselWidget,
  PostCard,
  AlbumWidget,
} from './../../components';

class DashboardV2 extends PureComponent {
  render() {
    const title = brand.name + ' - Dashboard Version 2';
    const description = brand.desc;
    const { classes } = this.props;
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
        <Grid container className={classes.root}>
          <CounterIconsWidget />
        </Grid>
        <Divider className={classes.divider} />
        <AreaChartWidget />
        <Divider className={classes.divider} />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <CarouselWidget />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container spacing={24} className={classes.root}>
          <Grid item sm={6} xs={12}>
            <PostCard
              liked={1}
              shared={20}
              commented={15}
              date="Sept, 25 2018"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum."
              image={imgApi[16]}
              avatar={avatarApi[6]}
              name="John Doe"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <AlbumWidget />
          </Grid>
        </Grid>
      </div>
    );
  }
}

DashboardV2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardV2);
