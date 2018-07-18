import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { data1 } from './sampleData';

const theme = createMuiTheme(ThemePallete.greenNatureTheme);
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

function BarResponsive(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <BarChart
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
          <Legend />
          <Bar dataKey="pv" fill={color.primary} />
          <Bar dataKey="uv" fill={color.secondary} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

BarResponsive.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarResponsive);

