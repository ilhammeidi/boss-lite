import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  head: {
    backgroundColor: theme.palette.secondary.light,
    lineHeight: '30px',
    height: 30,
    textTransform: 'uppercase'
  }
});

function PinnedList(props) {
  const { classes } = props;

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="row"
    >
      <List className={classes.root} subheader={<li />}>
        {[0, 1, 2, 3, 4].map(sectionId => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader className={classes.head}>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map(item => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Grid>
  );
}

PinnedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PinnedList);
