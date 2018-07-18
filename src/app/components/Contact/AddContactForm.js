import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form/immutable';
import { TextField } from 'redux-form-material-ui';
import InputAdornment from '@material-ui/core/InputAdornment';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
import Bookmark from '@material-ui/icons/Bookmark';
import LocalPhone from '@material-ui/icons/LocalPhone';
import Email from '@material-ui/icons/Email';
import Smartphone from '@material-ui/icons/Smartphone';
import LocationOn from '@material-ui/icons/LocationOn';
import Work from '@material-ui/icons/Work';
import Language from '@material-ui/icons/Language';
import css from 'ba-components/Form.scss';
import styles from './contact-jss';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

class AddContactForm extends React.Component {
  saveRef = ref => {
    this.ref = ref;
    return this.ref;
  };
  render() {
    const {
      classes,
      reset,
      pristine,
      submitting,
      handleSubmit,
    } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <section className={css.bodyForm}>
            <div>
              <Field
                name="name"
                component={TextField}
                placeholder="Name"
                label="Name"
                validate={required}
                required
                ref={this.saveRef}
                withRef
                className={classes.field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermContactCalendar />
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div>
              <Field
                name="title"
                component={TextField}
                placeholder="Title"
                label="Title"
                className={classes.field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Bookmark />
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div>
              <Field
                name="phone"
                component={TextField}
                placeholder="Phone"
                type="tel"
                label="Phone"
                className={classes.field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhone />
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div>
              <Field
                name="secondaryPhone"
                component={TextField}
                placeholder="Secondary Phone"
                type="tel"
                label="Secondary Phone"
                className={classes.field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Smartphone />
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div>
              <Field
                name="personalEmail"
                component={TextField}
                placeholder="Personal Email"
                type="email"
                validate={email}
                label="Personal Email"
                className={classes.field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div>
              <Field
                name="companyEmail"
                component={TextField}
                placeholder="Company Email"
                type="email"
                validate={email}
                label="Company Email"
                className={classes.field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Work />
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div>
              <Field
                name="address"
                component={TextField}
                placeholder="Address"
                label="Address"
                className={classes.field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div>
              <Field
                name="website"
                component={TextField}
                placeholder="Website"
                type="url"
                label="Website"
                className={classes.field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Language />
                    </InputAdornment>
                  )
                }}
              />
            </div>
          </section>
          <div className={css.buttonArea}>
            <Button variant="raised" color="secondary" type="submit" disabled={submitting}>
              Submit
            </Button>
            <Button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

AddContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const AddContactFormRedux = reduxForm({
  form: 'immutableAddContact',
  enableReinitialize: true,
})(AddContactForm);

const AddContactInit = connect(
  state => ({
    initialValues: state.getIn(['contact', 'formValues'])
  })
)(AddContactFormRedux);

export default withStyles(styles)(AddContactInit);
