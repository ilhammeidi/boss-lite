import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  input: {
    margin: theme.spacing.unit * 3,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class TextFields extends PureComponent {
  state = {
    name: 'Composed TextField',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={24}
        >
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Textfield Components</Typography>
            <Typography className={classes.divider}>TextField is composed of smaller components that you can leverage directly to significantly customize your form inputs.</Typography>
            <div className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Name</InputLabel>
                <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
              </FormControl>
              <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                <InputLabel htmlFor="name-helper">Name</InputLabel>
                <Input id="name-helper" value={this.state.name} onChange={this.handleChange} />
                <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl} disabled>
                <InputLabel htmlFor="name-disabled">Name</InputLabel>
                <Input id="name-disabled" value={this.state.name} onChange={this.handleChange} />
                <FormHelperText>Disabled</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl} error aria-describedby="name-error-text">
                <InputLabel htmlFor="name-error">Name</InputLabel>
                <Input id="name-error" value={this.state.name} onChange={this.handleChange} />
                <FormHelperText id="name-error-text">Error</FormHelperText>
              </FormControl>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Input State</Typography>
            <div className={classes.container}>
              <Input
                defaultValue="Hello world"
                className={classes.input}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Input
                placeholder="Placeholder"
                className={classes.input}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Input
                value="Disabled"
                className={classes.input}
                disabled
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Input
                defaultValue="Error"
                className={classes.input}
                error
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
