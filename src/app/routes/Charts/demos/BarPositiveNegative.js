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
  Legend,
  ReferenceLine
} from 'recharts';
import { data3 } from './sampleData';

const theme = createMuiTheme(ThemePallete.greenTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

function BarPositiveNegative() {
  return (
    <BarChart
      width={800}
      height={450}
      data={data3}
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
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="pv" fill={color.secondary} />
      <Bar dataKey="uv" fill={color.primary} />
    </BarChart>
  );
}

export default BarPositiveNegative;
