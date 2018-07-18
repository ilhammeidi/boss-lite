import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import green from '@material-ui/core/colors/green';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { data1 } from './sampleData';

const theme = createMuiTheme(ThemePallete.magentaTheme);
const color = ({
  main: theme.palette.primary.main,
  maindark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  third: green[500],
});

const styles = {
  chartFluid: {
    width: '100%',
    height: 450
  }
};

function CompossedResponsive(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <ComposedChart
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
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill={color.main} stroke={color.maindark} />
          <Bar dataKey="pv" barSize={20} fill={color.secondary} />
          <Line type="monotone" dataKey="uv" stroke={color.third} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

CompossedResponsive.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompossedResponsive);

