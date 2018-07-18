import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import OtherMenuContent from 'ba-utils/otherMenu';

class OtherMenu extends React.Component {
  render() {
    const { toggleDrawerOpen } = this.props;
    const getOtherMenu = menuArray => menuArray.map((item, index) => {
      const keyIndex = index.toString();
      return (
        <div key={keyIndex}>
          <ListItem
            button
            component={NavLink}
            to={item.link}
            onClick={toggleDrawerOpen}
          >
            <ListItemText secondary={item.name} />
          </ListItem>
        </div>
      );
    });

    return (
      <div>
        {getOtherMenu(OtherMenuContent)}
      </div>
    );
  }
}

OtherMenu.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
};

export default OtherMenu;
