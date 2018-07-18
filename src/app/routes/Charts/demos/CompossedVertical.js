import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
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
  Legend
} from 'recharts';
import { data1 } from './sampleData';

const theme = createMuiTheme(ThemePallete.blueTheme);
const color = ({
  main: theme.palette.primary.main,
  maindark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  third: green[500],
});

function CompossedVertical() {
  return (
    <ComposedChart
      width={800}
      height={450}
      layout="vertical"
      data={data1}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Area dataKey="amt" fill={color.main} stroke={color.maindark} />
      <Bar dataKey="pv" barSize={20} fill={color.secondary} />
      <Line dataKey="uv" stroke={color.third} />
    </ComposedChart>
  );
}

export default CompossedVertical;
