import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PapperBlock from './../PapperBlock/PapperBlock';

const styles = theme => ({
  preview: {
    maxWidth: 600,
    margin: `${theme.spacing.unit}px auto`,
    boxShadow: theme.shadows[5],
    '& img': {
      display: 'block'
    }
  },
  buttonArea: {
    display: 'flex',
    padding: theme.spacing.unit * 2,
    justifyContent: 'center',
    '& a': {
      margin: theme.spacing.unit
    }
  },
  title: {
    textAlign: 'center'
  }
});

class MarketingAds extends React.Component {
  render() {
    const {
      classes,
      title,
      preview,
      link,
    } = this.props;
    return (
      <PapperBlock title={title} desc="">
        <Typography variant="subheading" className={classes.title}>Available on <strong>Boss Ultimate</strong></Typography>
        <figure className={classes.preview}>
          <img src={preview} alt="preview" />
        </figure>
        <div className={classes.buttonArea}>
          <Button href={link} target="_blank" variant="outlined" color="primary" className={classes.button} >See preview here</Button>
          <Button href="https://themeforest.net/item/boss-ultimate-react-redux-material-admin-template/22286397" target="_blank" variant="raised" color="secondary" className={classes.button} >Get it now</Button>
        </div>
      </PapperBlock>
    );
  }
}

MarketingAds.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default withStyles(styles)(MarketingAds);
