import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { data1 } from './sampleData';

const theme = createMuiTheme(ThemePallete.orangeTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

function BarStacked() {
  return (
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
      <Bar dataKey="pv" stackId="a" fill={color.secondary} />
      <Bar dataKey="uv" stackId="a" fill={color.primary} />
    </BarChart>
  );
}

export default BarStacked;
