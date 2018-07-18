import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';

class LimitedBadges extends PureComponent {
  render() {
    const {
      children,
      limit,
      value,
      ...rest
    } = this.props;
    return (
      <Badge badgeContent={value > limit ? limit + '+' : value} {...rest}>
        { children }
      </Badge>
    );
  }
}

LimitedBadges.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default LimitedBadges;
