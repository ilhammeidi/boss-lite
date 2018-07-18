import cyan from '@material-ui/core/colors/cyan';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    zIndex: 1,
    position: 'relative'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden'
    },
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing.unit * 3
  },
  loginWrap: {
    [theme.breakpoints.up('md')]: {
      width: 860
    },
  },
  formWrap: {
    [theme.breakpoints.up('md')]: {
      marginTop: -24
    },
  },
  btnArea: {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '& button': {
        width: '100%',
        margin: 5
      }
    },
  },
  noMargin: {
    margin: 0
  },
  optArea: {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '60%'
    },
  },
  redBtn: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  blueBtn: {
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
    '&:hover': {
      backgroundColor: indigo[700],
    },
  },
  cyanBtn: {
    color: theme.palette.getContrastText(cyan[700]),
    backgroundColor: cyan[500],
    '&:hover': {
      backgroundColor: cyan[700],
    },
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  footer: {
    textAlign: 'center',
    padding: 5,
    background: theme.palette.grey[100],
    fontSize: 14,
    position: 'relative'
  },
  welcomeWrap: {
    position: 'relative'
  },
  welcome: {
    background: theme.palette.secondary.light,
    position: 'absolute',
    width: '100%',
    height: 'calc(100% + 30px)',
    padding: '20px 50px',
    top: -15,
    left: 2,
    boxShadow: theme.shadows[5],
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    marginBottom: 20,
    '& img': {
      width: 32
    },
    '& h3': {
      fontSize: 18,
      margin: 0,
      paddingLeft: 10,
      fontWeight: 500,
      color: theme.palette.grey[700]
    }
  },
  brandText: {
    marginTop: 10,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  decoBottom: {
    fontSize: 480,
    position: 'absolute',
    left: 10,
    bottom: -190,
    opacity: 0.1,
    color: theme.palette.secondary.dark
  },
  tab: {
    marginBottom: 20,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing.unit * -3,
    },
  },
  link: {
    fontSize: 12,
    marginLeft: -30,
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  socMedFull: {
    marginBottom: theme.spacing.unit * 2
  },
  lockWrap: {
    textAlign: 'center',
    padding: theme.spacing.unit * 3
  },
  avatar: {
    width: 150,
    height: 150,
    margin: '5px auto 30px',
    [theme.breakpoints.up('md')]: {
      margin: '-75px auto 30px',
    },
    boxShadow: theme.shadows[8]
  },
  userName: {
    marginBottom: theme.spacing.unit * 3
  },
  hint: {
    padding: theme.spacing.unit
  }
});

export default styles;
