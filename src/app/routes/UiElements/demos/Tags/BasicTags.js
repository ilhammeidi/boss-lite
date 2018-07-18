import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function BasicTags(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Chip label="Basic Tag" className={classes.chip} color="primary" />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Tag"
        onClick={handleClick}
        className={classes.chip}
        color="primary"
      />
      <Chip
        avatar={<Avatar src="/images/pp_girl.svg" />}
        label="Deletable Tag"
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Clickable Deletable Tag"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        label="Custom delete icon Tag"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
        deleteIcon={<DoneIcon />}
      />
    </div>
  );
}

BasicTags.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTags);
