const drawerWidth = 240;
const styles = theme => ({
  user: {
    justifyContent: 'center'
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
    border: 'none',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  swipeDrawerPaper: {
    width: drawerWidth,
  },
  opened: {
    background: theme.palette.grey[200],
    '& $primary, & $icon': {
      color: theme.palette.secondary.dark,
    },
  },
  drawerPaperClose: {
    width: 66,
    position: 'absolute',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& $user': {
      justifyContent: 'flex-start'
    },
    '& $bigAvatar': {
      width: 40,
      height: 40,
    },
    '& li ul': {
      display: 'none'
    },
    '&:hover': {
      width: 240,
      boxShadow: theme.shadows[6],
      '& li ul': {
        display: 'block'
      }
    },
    '& $menuContainer': {
      paddingLeft: theme.spacing.unit * 1.5,
      paddingRight: theme.spacing.unit * 1.5,
    }
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
    height: '100%'
  },
  drawerHeader: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '0',
    ...theme.mixins.toolbar,
    '& h3': {
      color: theme.palette.primary.contrastText,
    }
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 80,
    height: 80,
  },
  brandBar: {
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '&:after': {
      transition: theme.transitions.create(['box-shadow'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  },
  darker: {
    background: theme.palette.primary.dark,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit * 1.5,
  },
  child: {
    '& a': {
      paddingLeft: theme.spacing.unit * 6,
    }
  },
  dense: {
    marginLeft: -15
  },
  active: {
    backgroundColor: theme.palette.primary.light,
    '& $primary, & $icon': {
      color: theme.palette.secondary.dark,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    }
  },
  nolist: {
    listStyle: 'none',
  },
  primary: {},
  icon: {
    marginRight: 0,
    color: theme.palette.secondary.dark,
  },
  head: {
    paddingLeft: 16
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 10px 5px',
    height: 64,
    position: 'relative',
    '& img': {
      width: 20
    },
    '& h3': {
      fontSize: 16,
      margin: 0,
      paddingLeft: 10,
      fontWeight: 500
    }
  },
  profile: {
    height: 120,
    display: 'flex',
    fontSize: 14,
    padding: 10,
    alignItems: 'center',
    '& h4': {
      fontSize: 18,
      marginBottom: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: 110
    },
    '& span': {
      fontSize: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: 110,
      display: 'block',
      overflow: 'hidden'
    }
  },
  menuContainer: {
    padding: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit,
    overflow: 'auto',
    height: 'calc(100% - 185px)',
    position: 'relative',
    display: 'block'
  },
  divider: {
    marginTop: theme.spacing.unit
  }
});

export default styles;
