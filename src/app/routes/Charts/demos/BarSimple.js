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

const theme = createMuiTheme(ThemePallete.redTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

function BarSimple() {
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
      <Bar dataKey="pv" fill={color.primary} />
      <Bar dataKey="uv" fill={color.secondary} />
    </BarChart>
  );
}

export default BarSimple;
