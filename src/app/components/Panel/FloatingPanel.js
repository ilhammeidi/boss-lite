import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ExpandIcon from '@material-ui/icons/CallMade';
import MinimizeIcon from '@material-ui/icons/CallReceived';
import styles from './panel-jss';

class FloatingPanel extends React.Component {
  state = {
    expanded: false
  }

  toggleExpand() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const {
      classes,
      openForm,
      closeForm,
      children,
      branch,
      title,
      extraSize,
      width
    } = this.props;
    const { expanded } = this.state;
    return (
      <div>
        <div className={
          classNames(
            classes.formOverlay,
            openForm && (isWidthDown('sm', width) || expanded) ? classes.showForm : classes.hideForm
          )}
        />
        <section className={
          classNames(
            !openForm ? classes.hideForm : classes.showForm,
            expanded ? classes.expanded : '',
            classes.floatingForm,
            classes.formTheme,
            extraSize && classes.large
          )}
        >
          <header>
            { title }
            <div className={classes.btnOpt}>
              <Tooltip title={expanded ? 'Exit Full Screen' : 'Full Screen'}>
                <IconButton className={classes.expandButton} onClick={() => this.toggleExpand()} aria-label="Expand">
                  {expanded ? <MinimizeIcon /> : <ExpandIcon />}
                </IconButton>
              </Tooltip>
              <Tooltip title="Close">
                <IconButton className={classes.closeButton} onClick={() => closeForm(branch)} aria-label="Close">
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </div>
          </header>
          {children}
        </section>
      </div>
    );
  }
}

FloatingPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  openForm: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  branch: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  title: PropTypes.string,
  extraSize: PropTypes.bool,
};

FloatingPanel.defaultProps = {
  title: 'Add New Item',
  extraSize: false,
};

const FloatingPanelResponsive = withWidth()(FloatingPanel);
export default withStyles(styles)(FloatingPanelResponsive);
