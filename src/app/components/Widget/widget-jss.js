import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import deepOrange from '@material-ui/core/colors/deepOrange';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import lime from '@material-ui/core/colors/lime';
import indigo from '@material-ui/core/colors/indigo';

const styles = theme => ({
  rootCounter: {
    flexGrow: 1,
    padding: theme.spacing.unit * 1.5,
    [theme.breakpoints.up('lg')]: {
      padding: `${theme.spacing.unit * 1.5}px ${theme.spacing.unit}px`,
    },
    [theme.breakpoints.down('xs')]: {
      margin: `0 ${theme.spacing.unit * -1.5}px`,
    }
  },
  rootCounterFull: {
    flexGrow: 1,
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`
  },
  dividerBig: {
    margin: `${theme.spacing.unit * 2}px 0`
  },
  centerItem: {},
  secondaryWrap: {
    background: theme.palette.grey[100],
    padding: 20,
    borderRadius: 4,
    justifyContent: 'space-around',
    '& > $centerItem': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '& li': {
      marginBottom: 30
    },
    '& $chip': {
      top: 70,
      position: 'absolute',
      fontSize: 11,
      fontWeight: 400,
    }
  },
  bigResume: {
    marginBottom: 20,
    justifyContent: 'space-between',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      height: 160,
      display: 'block',
    },
    '& li': {
      paddingRight: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      [theme.breakpoints.down('sm')]: {
        width: '50%',
        float: 'left'
      },
    },
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    '& svg': {
      fontSize: 32
    }
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  pinkProgress: {
    color: pink[500],
    '& div': {
      backgroundColor: pink[500],
    }
  },
  greenProgress: {
    color: green[500],
    '& div': {
      backgroundColor: green[500],
    }
  },
  orangeProgress: {
    color: deepOrange[500],
    '& div': {
      backgroundColor: deepOrange[500],
    }
  },
  purpleProgress: {
    color: deepPurple[500],
    '& div': {
      backgroundColor: deepPurple[500],
    }
  },
  blueProgress: {
    color: blue[500],
    '& div': {
      backgroundColor: blue[500],
    }
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  chip: {
    margin: '8px 0 8px auto',
    color: '#FFF'
  },
  table: {
    minWidth: 500,
    '& td': {
      padding: 10,
    }
  },
  user: {
    display: 'flex',
  },
  textCenter: {
    textAlign: 'center'
  },
  red: {},
  orange: {},
  indigo: {},
  purple: {},
  lime: {},
  taskIcon: {
    display: 'block',
    textAlign: 'center',
    margin: '0 10px',
    '&$red': {
      color: red[300],
    },
    '&$orange': {
      color: orange[300],
    },
    '&$purple': {
      color: purple[300],
    },
    '&$lime': {
      color: lime[300],
    },
    '&$indigo': {
      color: indigo[300],
    }
  },
  done: {},
  listItem: {
    padding: 5,
    background: theme.palette.common.white,
    boxShadow: theme.shadows[3],
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
    },
    '&$done': {
      textDecoration: 'line-through'
    }
  },
  title: {},
  subtitle: {},
  styledPaper: {
    backgroundColor: theme.palette.secondary.main,
    padding: 20,
    '& $title, & $subtitle': {
      color: theme.palette.common.white
    }
  },
  progressWidget: {
    marginTop: 20,
    background: theme.palette.secondary.dark,
    '& div': {
      background: theme.palette.primary.light,
    }
  },
  chipProgress: {
    marginTop: 20,
    background: theme.palette.primary.light,
    '& div': {
      background: green[500],
      color: theme.palette.common.white
    }
  },
  taskStatus: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.main
    }
  },
  counterIcon: {
    color: theme.palette.common.white,
    opacity: 0.7,
    fontSize: 84
  },
  progressCircle: {
    margin: 20
  },
  itemCarousel: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  },
  albumRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    maxWidth: 'none'
  },
  mapWrap: {
    position: 'relative'
  },
  address: {
    [theme.breakpoints.up('md')]: {
      top: '50%',
      right: 60,
      position: 'absolute',
      transform: 'translate(0, -50%)'
    },
  },
  carouselItem: {
    margin: '0 5px',
    boxShadow: theme.shadows[3],
    borderRadius: 4,
    overflow: 'hidden',
    height: 250,
    padding: '60px 20px',
    position: 'relative'
  },
  iconBg: {
    color: theme.palette.common.white,
    opacity: 0.25,
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 96
  },
  carouselTitle: {
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 500,
    fontSize: 20
  },
  carouselDesc: {
    color: theme.palette.common.white
  },
  chartWrap: {
    overflow: 'auto',
  },
  chartFluid: {
    width: '100%',
    minWidth: 400,
    height: 300,
  }
});

export default styles;
