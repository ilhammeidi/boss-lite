import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { data8, data9 } from './sampleData';

const theme = createMuiTheme(ThemePallete.skyBlueTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

const styles = {
  chartFluid: {
    width: '100%',
    height: 450
  }
};

function ScatterResponsive(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <ScatterChart
          width={800}
          height={450}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="x" type="number" name="stature" unit="cm" />
          <YAxis dataKey="y" type="number" name="weight" unit="kg" />
          <ZAxis range={[100]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={data8} fill={color.primary} />
          <Scatter name="B school" data={data9} fill={color.secondary} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

ScatterResponsive.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScatterResponsive);
