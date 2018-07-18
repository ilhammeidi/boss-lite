import red from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/lightGreen';
import blue from '@material-ui/core/colors/lightBlue';
import violet from '@material-ui/core/colors/deepPurple';
import orange from '@material-ui/core/colors/orange';
const styles = theme => ({
  root: {
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      padding: '20px 8px'
    },
  },
  calendarWrap: {
    minHeight: 600
  },
  addBtn: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    zIndex: 100
  },
  typography: {
    margin: theme.spacing.unit * 2,
  },
  divider: {
    margin: '5px 0',
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing.unit,
  },
  eventName: {
    padding: '50px 20px 10px 30px',
    minWidth: 400,
    color: 'rgba(0, 0, 0, 0.7)',
    '& svg': {
      top: 4,
      position: 'relative'
    }
  },
  time: {
    padding: 20
  },
  moreOpt: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  redRadio: {
    color: red[600],
    '& svg': {
      borderRadius: '50%',
      background: red[100],
    },
    '&$checked': {
      color: red[500],
    },
  },
  greenRadio: {
    color: green[600],
    '& svg': {
      borderRadius: '50%',
      background: green[100],
    },
    '&$checked': {
      color: green[500],
    },
  },
  blueRadio: {
    color: blue[600],
    '& svg': {
      borderRadius: '50%',
      background: blue[100],
    },
    '&$checked': {
      color: blue[500],
    },
  },
  violetRadio: {
    color: violet[600],
    '& svg': {
      borderRadius: '50%',
      background: violet[100],
    },
    '&$checked': {
      color: violet[500],
    },
  },
  orangeRadio: {
    color: orange[600],
    '& svg': {
      borderRadius: '50%',
      background: orange[100],
    },
    '&$checked': {
      color: orange[500],
    },
  },
  checked: {},
});

export default styles;
