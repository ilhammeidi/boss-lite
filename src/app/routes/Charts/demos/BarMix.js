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
import green from '@material-ui/core/colors/green';
import { data2 } from './sampleData';

const theme = createMuiTheme(ThemePallete.blueTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
  third: green[500]
});

function BarMix() {
  return (
    <BarChart
      width={800}
      height={450}
      data={data2}
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
      <Bar dataKey="female" stackId="a" fill={color.primary} />
      <Bar dataKey="male" stackId="a" fill={color.secondary} />
      <Bar dataKey="uv" fill={color.third} />
    </BarChart>
  );
}

export default BarMix;
