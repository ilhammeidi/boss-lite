import React from 'react';
import { object, PropTypes } from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import Loading from 'react-loading-bar';
import { bindActionCreators } from 'redux';
import { withTheme, withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import 'ba-components/vendors/react-loading-bar/index.css';
import { changeThemeAction } from './../../actions/UiActions';
import styles from './appStyles-jss';

class App extends React.Component {
  state = {
    pageLoaded: true
  }

  componentWillMount = () => {
    this.onProgressShow();
    /* Uncomment this bellow if want to change theme randomly */
    // this.props.changeTheme('randomTheme');
  }

  componentDidMount = () => {
    this.playProgress();
    this.unlisten = this.props.history.listen(() => {
      this.playProgress();
    });
  }

  componentWillUnmount() {
    this.unlisten();
    this.onProgressShow();
  }

  onProgressShow = () => {
    this.setState({ pageLoaded: true });
  }

  onProgressHide = () => {
    this.setState({ pageLoaded: false });
  }

  playProgress = () => {
    this.onProgressShow();
    setTimeout(() => {
      this.onProgressHide();
    }, 500);
  }

  render() {
    const {
      classes,
      route,
      color
    } = this.props;
    const { pageLoaded } = this.state;
    const theme = createMuiTheme(ThemePallete[color]);
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Loading
            show={pageLoaded}
            color="rgba(255,255,255,.7)"
            showSpinner={false}
          />
          {renderRoutes(route.routes)}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  /* Uncomment this bellow if want to change theme randomly */
  // changeTheme: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  route: object,
};

App.defaultProps = {
  route: object
};

const reducer = 'ui';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  color: state.getIn([reducer, 'theme']),
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
});

const AppMapped = connect(
  mapStateToProps,
  dispatchToProps
)(App);

export default withTheme()(withStyles(styles)(AppMapped));
