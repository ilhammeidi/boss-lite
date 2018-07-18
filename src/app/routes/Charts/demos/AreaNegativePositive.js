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

const theme = createMuiTheme(ThemePallete.redTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

const gradientOffset = () => {
  const dataMax = Math.max(...data2.map((i) => i.uv));
  const dataMin = Math.min(...data2.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  } else if (dataMin >= 0) {
    return 1;
  }
  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

function AreaNegativePositive() {
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
      <defs>
        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset={off} stopColor={color.secondary} stopOpacity={1} />
          <stop offset={off} stopColor={color.primary} stopOpacity={1} />
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="uv" stroke="#bcbcbc" fill="url(#splitColor)" />
    </AreaChart>
  );
}

export default AreaNegativePositive;
