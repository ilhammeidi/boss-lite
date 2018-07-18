import React from 'react';
import PropTypes from 'prop-types';
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
  LabelList
} from 'recharts';
import { data1 } from './sampleData';

const theme = createMuiTheme(ThemePallete.purpleTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

const renderCustomizedLabel = props => {
  const {
    x,
    y,
    width,
    value,
  } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + (width / 2)} cy={y - radius} r={radius} fill="#689F38" />
      <text x={x + (width / 2)} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

renderCustomizedLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  value: PropTypes.number,
};

renderCustomizedLabel.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  value: 0,
};

function BarCustomLabel() {
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
      <Bar dataKey="pv" fill={color.primary}>
        <LabelList dataKey="name" content={renderCustomizedLabel} />
      </Bar>
      <Bar dataKey="uv" fill={color.secondary}>
        <LabelList dataKey="name" content={renderCustomizedLabel} />
      </Bar>
    </BarChart>
  );
}

export default BarCustomLabel;
