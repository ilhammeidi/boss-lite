import { darken } from '@material-ui/core/styles/colorManipulator';
const expand = {
  bottom: 'auto',
  right: 'auto',
  left: '50%',
  top: '50%',
  transform: 'translateX(-50%) translateY(-50%)'
};

const styles = theme => ({
  formTheme: {
    background: darken(theme.palette.primary.dark, 0.2),
    boxShadow: theme.shadows[7]
  },
  hideForm: {
    display: 'none'
  },
  showForm: {
    display: 'block'
  },
  btnOpt: {},
  expandButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  floatingForm: {
    position: 'fixed',
    width: 500,
    bottom: 10,
    right: 10,
    zIndex: 1300,
    borderRadius: 3,
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      width: '95% !important',
      ...expand
    },
    '& header': {
      color: theme.palette.common.white,
      padding: '15px 20px',
      '& $btnOpt': {
        position: 'absolute',
        right: 0,
        top: 0,
        '& > *': {
          margin: '0 5px'
        },
        '& $expandButton': {
          transform: 'rotate(270deg)'
        },
        '& svg': {
          fill: theme.palette.common.white,
        }
      }
    },
  },
  bodyForm: {
    position: 'relative',
    background: theme.palette.common.white,
    padding: '15px 30px',
    maxHeight: 450,
    overflow: 'auto'
  },
  buttonArea: {
    background: theme.palette.grey[100],
    position: 'relative',
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'right',
    padding: '10px 30px',
    '& button': {
      marginRight: 5
    }
  },
  expanded: {
    ...expand
  },
  formOverlay: {
    position: 'fixed',
    background: theme.palette.grey[900],
    opacity: 0.7,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1300,
  },
  large: {
    width: 650
  }
});

export default styles;
