import React from 'react';
import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import MenuContent from 'ba-utils/menu';
import { PapperBlock } from './../../components';

const styles = {
  link: {
    display: 'block',
    textTransform: 'capitalize'
  }
};

function sortByKey(array, key) {
  return array.sort((a, b) => {
    const x = a[key]; const y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

class Parent extends React.Component {
  render() {
    const title = brand.name;
    const description = brand.desc;
    const { classes } = this.props;
    // Get Path Location
    let parts = this.props.history.location.pathname.split('/');
    const place = parts[parts.length - 1];
    parts = parts.slice(1, parts.length - 1);
    const menuItems = MenuContent
      .find(obj => (
        obj.key === place
      ));
    const getMenus = menuArray => menuArray.map((item, index) => (
      <Button
        key={index.toString()}
        color="primary"
        component={Link}
        className={classes.link}
        to={item.link}
      >
        {item.name}
      </Button>
    ));
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title={place} desc="">
          {getMenus(sortByKey(menuItems.child, 'key'))}
        </PapperBlock>
      </div>
    );
  }
}

Parent.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(Parent);
