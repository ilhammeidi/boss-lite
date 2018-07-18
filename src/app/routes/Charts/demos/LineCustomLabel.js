import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import {
  LineChart,
  Line,
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

const CustomizedLabel = props => {
  const {
    x,
    y,
    stroke,
    value
  } = props;
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      { value }
    </text>
  );
};

CustomizedLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  value: PropTypes.number,
  stroke: PropTypes.string,
};

CustomizedLabel.defaultProps = {
  x: 0,
  y: 0,
  value: 0,
  stroke: '#000'
};

function LineCustomLabel() {
  return (
    <LineChart
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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke={color.primary} label={<CustomizedLabel stroke={color.primary} />} />
      <Line type="monotone" dataKey="uv" stroke={color.secondary} label={<CustomizedLabel stroke={color.secondary} />} />
    </LineChart>
  );
}

export default LineCustomLabel;
