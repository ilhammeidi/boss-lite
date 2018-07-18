import React, { Fragment, PureComponent } from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Icon, InputAdornment } from '@material-ui/core';
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

class DateTimeInput extends PureComponent {
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
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  value={selectedDate}
                  disablePast
                  onChange={this.handleDateChange}
                  label="DateTimePicker"
                />
              </MuiPickersUtilsProvider>
            </div>

            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  autoOk
                  ampm={false}
                  disableFuture
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  label="24h clock"
                />
              </MuiPickersUtilsProvider>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Customization</Typography>
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  autoOk
                  ampm={false}
                  showTabs={false}
                  autoSubmit={false}
                  disableFuture
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  helperText="Hardcoded helper text"
                  leftArrowIcon={<Icon> add_alarm </Icon>}
                  rightArrowIcon={<Icon> snooze </Icon>}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <Icon>add_alarm</Icon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  keyboard
                  label="Keyboard input"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  format="YYYY/MM/DD hh:mm A"
                  mask={[/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
                />
              </MuiPickersUtilsProvider>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

DateTimeInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateTimeInput);
