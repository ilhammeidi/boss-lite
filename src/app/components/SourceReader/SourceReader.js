import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import themeSource from 'react-syntax-highlighter/styles/prism/xonokai';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import LinearProgress from '@material-ui/core/LinearProgress';
import Code from '@material-ui/icons/Code';
import Close from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
import codePreview from './../../config/codePreview';

const url = '/api/docs?src=';

const styles = theme => ({
  button: {
    margin: '8px 5px',
  },
  iconSmall: {
    fontSize: 20,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  source: {
    overflow: 'hidden',
    height: 0,
    position: 'relative',
    transition: 'all .5s',
    margin: '0 -10px'
  },
  preloader: {
    position: 'absolute',
    top: 36,
    left: 0,
    width: '100%'
  },
  open: {
    height: 'auto',
  },
  src: {
    textAlign: 'center',
    margin: 10,
    fontFamily: 'monospace',
    '& span': {
      fontSize: 14,
      marginRight: 5,
      top: 3,
      position: 'relative'
    }
  }
});

class SourceReader extends Component {
  state = { raws: [], open: false, loading: false };

  sourceOpen = () => {
    const name = this.props.componentName;
    this.setState({ loading: true }, () => {
      Axios.get(url + name).then(result => this.setState({
        raws: result.data.records,
        loading: false
      }));
      this.setState({ open: !this.state.open });
    });
  };

  render() {
    const { raws, open, loading } = this.state;
    const { classes } = this.props;
    registerLanguage('jsx', jsx);
    if (codePreview.enable) {
      return (
        <div>
          <Button onClick={this.sourceOpen} color="secondary" className={classes.button} size="small">
            { open ?
              <Close className={classNames(classes.leftIcon, classes.iconSmall)} /> :
              <Code className={classNames(classes.leftIcon, classes.iconSmall)} />
            }
            { open ? 'Hide Code' : 'Show Code' }
          </Button>
          <section className={classNames(classes.source, open ? classes.open : '')}>
            <p className={classes.src}>
              <Icon className="description">description</Icon>
              src/app/{this.props.componentName}
            </p>
            {loading &&
              <LinearProgress color="secondary" className={classes.preloader} />
            }
            {raws.map((raw, index) =>
              ([
                <div key={index.toString()}>
                  <SyntaxHighlighter language="jsx" style={themeSource} showLineNumbers="true">
                    {raw.source.toString()}
                  </SyntaxHighlighter>
                </div>
              ])
            )}
          </section>
        </div>
      );
    }
    return false;
  }
}

SourceReader.propTypes = {
  componentName: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SourceReader);
