import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import {
  ComposedChart,
  Line,
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
  secondary: theme.palette.secondary.main,
});

function CompossedSameData() {
  return (
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
      <Bar dataKey="uv" barSize={20} fill={color.main} />
      <Line type="monotone" dataKey="uv" stroke={color.secondary} />
    </ComposedChart>
  );
}

export default CompossedSameData;
