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
import red from '@material-ui/core/colors/red';
import { data1 } from './sampleData';

const theme = createMuiTheme(ThemePallete.orangeTheme);
const color = ({
  primary: theme.palette.primary.main,
  primarydark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  secondarydark: theme.palette.secondary.dark,
  third: red[500],
  thirddark: red[900],
});

const toPercent = (decimal, fixed = 0) => (
  `${(decimal * 100).toFixed(fixed)}%`
);

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;
  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {
          payload.map((entry, index) => (
            <li key={`item-${index.toString()}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

function AreaPercent() {
  return (
    <AreaChart
      width={800}
      height={450}
      data={data1}
      stackOffset="expand"
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
      <Tooltip content={renderTooltipContent} />
      <Area type="monotone" dataKey="uv" stackId="1" stroke={color.primarydark} fill={color.primary} />
      <Area type="monotone" dataKey="pv" stackId="1" stroke={color.secondary} fill={color.secondarydark} />
      <Area type="monotone" dataKey="amt" stackId="1" stroke={color.third} fill={color.thirddark} />
    </AreaChart>
  );
}

export default AreaPercent;
