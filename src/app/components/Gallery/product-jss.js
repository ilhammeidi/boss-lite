import dark from '@material-ui/core/colors/blueGrey';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  rootSlider: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  item: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  detailContainer: {
    margin: '-16px auto 0',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1080,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 960,
      paddingTop: 40,
      marginTop: 0
    },
    [theme.breakpoints.down('sm')]: {
      overflowX: 'hidden',
    }
  },
  chipDiscount: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    marginBottom: 10,
  },
  chipSold: {
    background: dark[500],
    color: theme.palette.getContrastText(dark[500]),
    marginBottom: 10,
  },
  detailWrap: {
    padding: 30
  },
  title: {
    marginBottom: 30
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    padding: '8px 12px',
    '& > *': {
      marginRight: 10
    }
  },
  ratting: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    marginBottom: 20,
  },
  btnArea: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
    background: theme.palette.grey[100],
    padding: '10px 20px'
  },
  quantity: {
    width: 40,
    marginRight: 40,
    marginLeft: 10,
    '& input': {
      textAlign: 'right'
    }
  },
  desc: {
    padding: '10px 0'
  }
});

export default styles;
