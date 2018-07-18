import { fade } from '@material-ui/core/styles/colorManipulator';
const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: 'none !important',
    '& ::-webkit-input-placeholder': { /* Chrome/Opera/Safari */
      color: 'rgba(255,255,255,.3)'
    },
    '& ::-moz-placeholder': { /* Firefox 19+ */
      color: 'rgba(255,255,255,.3)'
    },
    '& :-ms-input-placeholder': { /* IE 10+ */
      color: 'rgba(255,255,255,.3)'
    },
    '& :-moz-placeholder': { /* Firefox 18- */
      color: 'rgba(255,255,255,.3)'
    },
    '& $menuButton': {
      marginLeft: theme.spacing.unit * 2
    }
  },
  flex: {
    flex: 1,
    textAlign: 'right'
  },
  appBarShift: {
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('lg')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    '& $menuButton': {
      marginLeft: 0
    }
  },
  menuButton: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: 0,
    }
  },
  hide: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    borderRadius: 2,
    background: fade(theme.palette.common.white, 0.15),
    display: 'inline-block',
    '&:hover': {
      background: fade(theme.palette.common.white, 0.25),
    },
    '& $input': {
      transition: theme.transitions.create('width'),
      width: 180,
      '&:focus': {
        width: 350,
      },
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
    },
  },
  search: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit * 9}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
  darker: {
    background: theme.palette.primary.dark,
    '&:after': {
      content: '""',
      left: -240,
      width: 'calc(100% + 240px)',
      position: 'absolute',
      bottom: -2,
      height: 1,
      background: '#000',
      filter: 'blur(3px)'
    }
  },
  separatorV: {
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    height: 20,
    margin: '0 10px',
    opacity: 0.4
  },
  notifMenu: {
    '& li': {
      height: 'auto',
      '& h3': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    }
  },
  badgeMenu: {
    '& span': {
      top: -12,
      right: -30
    }
  },
  textNotif: {
    '& span': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
  }
});

export default styles;
