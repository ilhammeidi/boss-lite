import React from 'react';
import PropTypes from 'prop-types';
import {
  PieChart,
  Pie,
  Cell
} from 'recharts';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';

import { data6 } from './sampleData';
const colors = [red[500], pink[500], purple[500], indigo[500], blue[500], cyan[500], teal[500]];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + ((outerRadius - innerRadius) * 0.5);
  const x = cx + (radius * Math.cos(-midAngle * RADIAN));
  const y = cy + (radius * Math.sin(-midAngle * RADIAN));

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

renderCustomizedLabel.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  midAngle: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  percent: PropTypes.number,
};

renderCustomizedLabel.defaultProps = {
  cx: 0,
  cy: 0,
  midAngle: 0,
  innerRadius: 0,
  outerRadius: 0,
  percent: 0,
};

class PieCustomLabel extends React.Component {
  render() {
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
        <Pie
          data={data6}
          cx={300}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={160}
          fill="#8884d8"
        >
          {
            data6.map((entry, index) => <Cell fill={colors[index % colors.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}

export default PieCustomLabel;
