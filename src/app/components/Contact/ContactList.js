import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
import Star from '@material-ui/icons/Star';
import styles from './contact-jss';

class ContactList extends React.Component {
  state = {
    filter: 'all',
  };

  handleChange = (event, value) => {
    this.setState({ filter: value });
  };
  render() {
    const {
      classes,
      dataContact,
      itemSelected,
      showDetail,
      search,
      keyword,
      clippedRight
    } = this.props;
    const { filter } = this.state;
    const favoriteData = dataContact.filter(item => item.get('favorited') === true);
    const getItem = dataArray => dataArray.map((data, index) => {
      if (data.get('name').toLowerCase().indexOf(keyword) === -1) {
        return false;
      }
      return (
        <ListItem
          button
          key={data.get('id')}
          className={index === itemSelected ? classes.selected : ''}
          onClick={() => showDetail(data)}
        >
          <Avatar alt={data.get('name')} src={data.get('avatar')} className={classes.avatar} />
          <ListItemText primary={data.get('name')} secondary={data.get('title')} />
        </ListItem>
      );
    });
    return (
      <Fragment>
        <Drawer
          variant="permanent"
          anchor="left"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div>
            <div className={classNames(classes.toolbar, clippedRight && classes.clippedRight)}>
              <div className={classes.flex}>
                <div className={classes.searchWrapper}>
                  <div className={classes.search}>
                    <SearchIcon />
                  </div>
                  <input className={classes.input} onChange={(event) => search(event)} placeholder="Search Contact" />
                </div>
              </div>
            </div>
            <Divider />
            <List>
              {filter === 'all' ? getItem(dataContact) : getItem(favoriteData)}
            </List>
          </div>
        </Drawer>
        <BottomNavigation value={filter} onChange={this.handleChange} className={classes.bottomFilter}>
          <BottomNavigationAction label="All" value="all" icon={<PermContactCalendar />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<Star />} />
        </BottomNavigation>
      </Fragment>
    );
  }
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
  dataContact: PropTypes.object.isRequired,
  keyword: PropTypes.string.isRequired,
  itemSelected: PropTypes.number.isRequired,
  showDetail: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  clippedRight: PropTypes.bool,
};

ContactList.defaultProps = {
  clippedRight: false
};

export default withStyles(styles)(ContactList);
