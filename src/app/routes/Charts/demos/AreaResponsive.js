import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import green from '@material-ui/core/colors/green';
import { data1 } from './sampleData';

const theme = createMuiTheme(ThemePallete.purpleTheme);
const color = ({
  primary: theme.palette.primary.main,
  primarydark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  secondarydark: theme.palette.secondary.dark,
  third: green[500],
  thirddark: green[900],
});

const styles = {
  chartFluid: {
    width: '100%',
    height: 450
  }
};

function AreaResponsive(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <AreaChart
          width={800}
          height={450}
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
  );
}

AreaResponsive.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AreaResponsive);
