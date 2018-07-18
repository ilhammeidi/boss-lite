import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import {
  PieChart,
  Pie,
  Tooltip
} from 'recharts';
import { data4, data5 } from './sampleData';

const theme = createMuiTheme(ThemePallete.purpleTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

function PieSimple() {
  return (
    <PieChart
      width={800}
      height={450}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <Pie isAnimationActive={false} dataKey="value" data={data4} cx={200} cy={200} outerRadius={80} fill={color.primary} label />
      <Pie data={data5} cx={500} dataKey="value" cy={200} innerRadius={40} outerRadius={80} fill={color.secondary} />
      <Tooltip />
    </PieChart>
  );
}

export default PieSimple;
