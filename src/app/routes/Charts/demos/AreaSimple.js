import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { data2 } from './sampleData';

const theme = createMuiTheme(ThemePallete.greenTheme);
const color = ({
  main: theme.palette.primary.main,
  dark: theme.palette.primary.dark,
});

function AreaSimple() {
  return (
    <AreaChart
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
      <Area type="monotone" dataKey="uv" stroke={color.dark} fill={color.main} />
    </AreaChart>
  );
}

export default AreaSimple;
