import React, { Fragment, PureComponent } from 'react';
import { TimePicker } from 'material-ui-pickers';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  picker: {
    margin: `${theme.spacing.unit * 3}px 5px`,
  }
});

class TimeInput extends PureComponent {
  state = {
    selectedDate: new Date(),
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;
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
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Basic usage</Typography>
            <Typography className={classes.divider}>
              A time picker should adjusts to a user’s preferred time setting, i.e. the 12-hour or 24-hour format.
            </Typography>
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <div className="picker">
                  <TimePicker
                    label="12 hours"
                    value={selectedDate}
                    onChange={this.handleDateChange}
                  />
                </div>
              </MuiPickersUtilsProvider>
            </div>

            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <TimePicker
                  clearable
                  ampm={false}
                  label="24 hours"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Keyboard Input</Typography>
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <TimePicker
                  keyboard
                  label="Masked timepicker"
                  mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
                  placeholder="08:00 AM"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </div>
            <Typography variant="button" className={classes.divider}>Custom Icon</Typography>
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <TimePicker
                  label="Masked timepicker"
                  mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
                  placeholder="08:00 AM"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <Icon>access_time</Icon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

TimeInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimeInput);
