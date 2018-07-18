import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { BreadCrumb } from './../../../../components';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  alone: {
    position: 'relative',
    margin: 20
  },
  field: {
    margin: '10px',
    position: 'relative'
  },
  paper: {
    padding: '5px 10px 1px',
    borderRadius: 5
  }
});

class ClassicBreadcrumbs extends PureComponent {
  render() {
    const { classes } = this.props;
    const location = { pathname: '/grand-parent/parent/children' };
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={8}
        >
          <Grid
            item
            md={6}
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Typography variant="button" className={classes.divider}>Arrow Separator</Typography>
            <div className={classes.field}>
              <Paper className={classes.paper}>
                <BreadCrumb theme="dark" separator=" › " location={location} />
              </Paper>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Typography variant="button" className={classes.divider}>Slash Separator</Typography>
            <div className={classes.field}>
              <Paper className={classes.paper}>
                <BreadCrumb theme="dark" separator=" / " location={location} />
              </Paper>
            </div>
          </Grid>
          <Grid
            item
            md={12}
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Typography variant="button" className={classes.divider}>Greater Than Separator</Typography>
            <div className={classes.field}>
              <Paper className={classes.paper}>
                <BreadCrumb theme="dark" separator=" > " location={location} />
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ClassicBreadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClassicBreadcrumbs);
