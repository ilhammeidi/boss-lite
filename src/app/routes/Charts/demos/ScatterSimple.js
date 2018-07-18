import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { data8 } from './sampleData';

const theme = createMuiTheme(ThemePallete.cyanTheme);
const color = ({
  primary: theme.palette.primary.main,
});

function ScatterSimple() {
  return (
    <ScatterChart
      width={800}
      height={450}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="x" type="number" name="stature" unit="cm" />
      <YAxis dataKey="y" type="number" name="weight" unit="kg" />
      <Scatter name="A school" data={data8} fill={color.primary} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    </ScatterChart>
  );
}

export default ScatterSimple;
