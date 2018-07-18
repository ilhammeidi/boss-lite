import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Type from 'ba-components/Typography.scss';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  }
});

class ListTypo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="button" className={classes.divider}>Unordered List</Typography>
        <div>
          <ul className={Type.list}>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </div>
        <Divider className={classes.divider} />
        <Typography variant="button" className={classes.divider}>Ordered List</Typography>
        <div>
          <ul className={Type.orderedlist}>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </div>
      </div>
    );
  }
}

ListTypo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListTypo);
