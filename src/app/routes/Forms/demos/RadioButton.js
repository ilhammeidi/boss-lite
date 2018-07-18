import React, { Fragment, PureComponent } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  field: {
    margin: `${theme.spacing.unit * 3}px 5px`,
  },
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
});

class RadioButton extends PureComponent {
  state = {
    value: 'female',
    selectedValue: 'a',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleChangeOther = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="space-around"
          direction="row"
          spacing={24}
        >
          <Grid
            item
            md={7}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Basic usage</Typography>
            <Typography className={classes.divider}>Radio buttons should have the most commonly used option selected by default.</Typography>
            <div>
              <Grid
                container
                alignItems="flex-start"
                justify="space-around"
                direction="row"
                spacing={24}
              >
                <Grid
                  item
                  md={6}
                  className={classes.demo}
                >
                  <FormControl component="fieldset" required className={classes.formControl}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      className={classes.group}
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                      <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="(Disabled option)"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  md={6}
                  className={classes.demo}
                >
                  <FormControl component="fieldset" required error className={classes.formControl}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender2"
                      className={classes.group}
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                      <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                      <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                      <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="(Disabled option)"
                      />
                    </RadioGroup>
                    <FormHelperText>You can display an error</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid
            item
            md={5}
            className={classes.demo}
          >
            <div>
              <Typography variant="button" className={classes.divider}>Radio without label</Typography>
              <Typography className={classes.divider}>Radio can also be used standalone, without the wrapper.</Typography>
              <Radio
                checked={this.state.selectedValue === 'a'}
                onChange={this.handleChangeOther}
                value="a"
                name="radio-button-demo"
                aria-label="A"
              />
              <Radio
                checked={this.state.selectedValue === 'b'}
                onChange={this.handleChangeOther}
                value="b"
                name="radio-button-demo"
                aria-label="B"
              />
              <Radio
                checked={this.state.selectedValue === 'c'}
                onChange={this.handleChangeOther}
                value="c"
                name="radio-button-demo"
                aria-label="C"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
                }}
              />
              <Radio
                checked={this.state.selectedValue === 'd'}
                onChange={this.handleChangeOther}
                value="d"
                color="default"
                name="radio-button-demo"
                aria-label="D"
              />
              <Radio
                checked={this.state.selectedValue === 'e'}
                onChange={this.handleChangeOther}
                value="e"
                color="default"
                name="radio-button-demo"
                aria-label="E"
                className={classes.size}
                icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
                checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
              />
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

RadioButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButton);
