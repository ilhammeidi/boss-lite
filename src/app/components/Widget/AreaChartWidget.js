import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Chip from '@material-ui/core/Chip';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import FilterVintage from '@material-ui/icons/FilterVintage';
import LocalCafe from '@material-ui/icons/LocalCafe';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import Style from '@material-ui/icons/Style';
import Typography from '@material-ui/core/Typography';
import ThemePallete from 'ba-utils/themePalette';
import green from '@material-ui/core/colors/green';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import messageStyles from 'ba-components/Messages.scss';
import { data1 } from 'ba-utils/chartData';
import Type from 'ba-components/Typography.scss';
import styles from './widget-jss';
import PapperBlock from './../PapperBlock/PapperBlock';

const theme = createMuiTheme(ThemePallete.blueTheme);
const color = ({
  primary: theme.palette.primary.main,
  primarydark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  secondarydark: theme.palette.secondary.dark,
  third: green[500],
  thirddark: green[900],
});

class AreaChartWidget extends PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <PapperBlock whiteBg noMargin title="Top Product Sales" desc="">
        <Grid container spacing={16}>
          <Grid item md={8} xs={12}>
            <ul className={classes.bigResume}>
              <li>
                <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>
                  <CardGiftcard />
                </Avatar>
                <Typography variant="title">
                  4321
                  <Typography>Gift Card</Typography>
                </Typography>
              </li>
              <li>
                <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>
                  <FilterVintage />
                </Avatar>
                <Typography variant="title">
                  9876
                  <Typography>Flowers</Typography>
                </Typography>
              </li>
              <li>
                <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>
                  <LocalCafe />
                </Avatar>
                <Typography variant="title">
                  345
                  <Typography>Cups</Typography>
                </Typography>
              </li>
              <li>
                <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>
                  <Style />
                </Avatar>
                <Typography variant="title">
                  996
                  <Typography>Name Cards</Typography>
                </Typography>
              </li>
            </ul>
            <div className={classes.chartWrap}>
              <div className={classes.chartFluid}>
                <ResponsiveContainer>
                  <AreaChart
                    width={600}
                    height={300}
                    data={data1}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5
                    }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stackId="1" stroke={color.primarydark} fill={color.primary} />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke={color.secondary} fill={color.secondarydark} />
                    <Area type="monotone" dataKey="amt" stackId="1" stroke={color.third} fill={color.thirddark} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="button"><span className={Type.bold}>Performance Listing</span></Typography>
            <Divider className={classes.divider} />
            <Grid container className={classes.secondaryWrap}>
              <Grid item className={classes.centerItem} md={6}>
                <Typography gutterBottom>Giftcard Quality</Typography>
                <Chip label="Super" className={classNames(classes.chip, messageStyles.bgError)} />
                <CircularProgress variant="determinate" className={classNames(classes.progressCircle, classes.pinkProgress)} size={100} value={70} />
              </Grid>
              <Grid className={classes.centerItem} item md={6}>
                <Typography gutterBottom>Monitoring Quality</Typography>
                <Chip label="Good" className={classNames(classes.chip, messageStyles.bgSuccess)} />
                <CircularProgress variant="determinate" className={classNames(classes.progressCircle, classes.greenProgress)} size={100} value={57} />
              </Grid>
              <Grid className={classes.centerItem} item md={6}>
                <Typography gutterBottom>Project Complete</Typography>
                <Chip label="Poor" className={classNames(classes.chip, messageStyles.bgWarning)} />
                <CircularProgress variant="determinate" className={classNames(classes.progressCircle, classes.orangeProgress)} size={100} value={28} />
              </Grid>
              <Grid className={classes.centerItem} item md={6}>
                <Typography gutterBottom>Deploy Progress</Typography>
                <Chip label="Medium" className={classNames(classes.chip, messageStyles.bgInfo)} />
                <CircularProgress variant="determinate" className={classNames(classes.progressCircle, classes.blueProgress)} size={100} value={70} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PapperBlock>
    );
  }
}

AreaChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AreaChartWidget);
