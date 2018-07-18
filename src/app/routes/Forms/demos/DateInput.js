import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'material-ui-pickers';
import { withStyles } from '@material-ui/core/styles';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import frLocale from 'moment/locale/fr';
import ruLocale from 'moment/locale/ru';
import enLocale from 'moment/locale/en-gb';

const localeMap = {
  en: enLocale,
  eo: frLocale,
  ru: ruLocale,
};

const styles = theme => ({
  demo: {
    height: 240,
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  picker: {
    margin: `${theme.spacing.unit * 3}px 5px`,
  }
});

class DateInput extends PureComponent {
  state = {
    selectedDate: new Date(),
    anchorEl: null,
    currentLocale: 'fr',
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  handleMenuOpen = (event) => {
    event.stopPropagation();
    this.setState({ anchorEl: event.currentTarget });
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  selectLocale = (selectedLocale) => {
    this.setState({
      currentLocale: selectedLocale,
      anchorEl: null,
    });
  }

  render() {
    const { selectedDate } = this.state;
    const { classes } = this.props;
    const locale = localeMap[this.state.currentLocale];
    return (
      <Fragment>
        <Grid
          container
          alignItems="center"
          justify="space-around"
          direction="row"
        >
          <Grid
            item
            md={4}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Basic usage</Typography>
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                  label="Basic example"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  animateYearScrolling={false}
                />
              </MuiPickersUtilsProvider>
            </div>

            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                  label="Clearable"
                  clearable
                  disableFuture
                  maxDateMessage="Date must be less than today"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  animateYearScrolling={false}
                />
              </MuiPickersUtilsProvider>
            </div>
          </Grid>
          <Grid
            item
            md={4}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Keyboard Input</Typography>
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                  keyboard
                  clearable
                  label="Uncontrolled input"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  animateYearScrolling={false}
                />
              </MuiPickersUtilsProvider>
            </div>

            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                  keyboard
                  label="Masked input"
                  format="DD/MM/YYYY"
                  placeholder="10/10/2018"
                  mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  animateYearScrolling={false}
                />
              </MuiPickersUtilsProvider>
            </div>
          </Grid>
          <Grid
            item
            md={4}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Localization</Typography>
            <div className={classes.picker}>
              <div className={classes.divider}>
                <MuiPickersUtilsProvider utils={MomentUtils} locale={locale}>
                  <DatePicker
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label="Select locale"
                          aria-owns={this.state.anchorEl ? 'locale-menu' : null}
                          onClick={this.handleMenuOpen}
                        >
                          <Icon> more_vert </Icon>
                        </IconButton>
                      ),
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>

              <Menu
                id="locale-menu"
                anchorEl={this.state.anchorEl}
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleMenuClose}
              >
                {
                  Object.keys(localeMap).map(localeItem => (
                    <MenuItem
                      key={localeItem}
                      selected={localeItem === this.state.locale}
                      onClick={() => this.selectLocale(localeItem)}
                    >
                      {localeItem}
                    </MenuItem>
                  ))
                }
              </Menu>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}


DateInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateInput);
