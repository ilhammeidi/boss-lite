import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  fixed: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
    textAlign: 'center'
  },
});

class SimpleTooltips extends React.Component {
  state = {
    open: false,
  };

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={16}
        >
          <Grid
            item
            md={6}
          >
            <Typography variant="button" className={classes.divider}>Simple Tooltips</Typography>
            <Grid
              container
              alignItems="center"
              justify="center"
              direction="row"
              spacing={16}
            >
              <Tooltip title="Delete">
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Add">
                <Button variant="fab" color="primary" aria-label="Add" className={classes.fab}>
                  <AddIcon />
                </Button>
              </Tooltip>
              <br />
              <br />
              <Tooltip title="FAB 'position: absolute;'">
                <Button variant="fab" color="secondary" className={classes.fixed}>
                  <AddIcon />
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid
            item
            md={6}
          >
            <Typography variant="button" className={classes.divider}>Delayed Tooltips</Typography>
            <Grid
              container
              alignItems="center"
              justify="center"
              direction="row"
              spacing={16}
            >
              <Tooltip
                enterDelay={300}
                leaveDelay={300}
                onClose={this.handleTooltipClose}
                onOpen={this.handleTooltipOpen}
                open={this.state.open}
                placement="bottom"
                title="Delete"
              >
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SimpleTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTooltips);
