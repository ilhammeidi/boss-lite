import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { changeThemeAction } from './../../actions/UiActions';
import { PapperBlock } from './../../components';
import styles from './themeStyles-jss';
import ThemeThumb from './ThemeThumb';

class Themes extends React.Component {
  state = {
    value: 'purpleRedTheme',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.changeTheme(event.target.value);
  };

  render() {
    const title = brand.name + ' - Choose Theme';
    const description = brand.desc;
    const { classes, palette } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Themes" desc="Choose App Theme for header, icon, button and many more. Theme built with 2 element color, that are Primary and Secondary color">
          <Grid container>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              {
                palette.map((item, index) => (
                  <FormControlLabel key={index.toString()} value={item.get('value')} control={<ThemeThumb />} label={item.get('name')} />
                ))
              }
            </RadioGroup>
          </Grid>
        </PapperBlock>
      </div>
    );
  }
}

Themes.propTypes = {
  classes: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
  palette: PropTypes.object.isRequired,
};

const reducer = 'ui';

const mapStateToProps = state => ({
  force: state, // force state from reducer
  palette: state.getIn([reducer, 'palette']),
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
});

const ThemesMapped = connect(
  mapStateToProps,
  dispatchToProps
)(Themes);

export default withStyles(styles)(ThemesMapped);
