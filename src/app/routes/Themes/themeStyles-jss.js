const styles = theme => ({
  group: {
    margin: `${theme.spacing.unit}px 0`,
    width: '100%',
    display: 'block',
    '& label': {
      display: 'inline-block',
      margin: 0,
      width: '99%',
      [theme.breakpoints.up('sm')]: {
        width: '45%'
      },
      [theme.breakpoints.up('md')]: {
        width: '33.33%'
      },
    },
    '& > label': {
      position: 'relative',
      '& > span': {
        marginTop: 10,
        display: 'block',
        textAlign: 'center',
        position: 'absolute',
        top: 12,
        left: 48,
      }
    }
  },
  thumb: {
    margin: theme.spacing.unit
  },
  selectedTheme: {
    boxShadow: `0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0 0 0px 4px ${theme.palette.secondary.main}`
  },
  content: {},
  title: {},
  ctn1: {},
  ctn2: {},
  appPreview: {
    width: '100%',
    padding: 5,
    height: 200,
    position: 'relative',
    display: 'flex',
    background: theme.palette.grey[50],
    '& header': {
      width: '100%',
      height: 50,
      background: theme.palette.primary.main,
      position: 'absolute',
      top: 0,
      left: 0
    },
    '& aside': {
      width: '30%',
      marginTop: 70,
      '& li': {
        margin: '0 10px 10px 5px',
        display: 'flex',
        '& i': {
          borderRadius: '50%',
          width: 8,
          height: 8,
          marginRight: 5,
          marginTop: -3,
          background: theme.palette.secondary.main,
        },
        '& p': {
          width: 40,
          height: 2,
          background: theme.palette.grey[400],
        }
      }
    },
    '& $content': {
      padding: 10,
      marginTop: 20,
      width: '70%',
      zIndex: 10,
      marginBottom: 10,
      '& $title': {
        background: theme.palette.primary.main,
        height: 5,
        width: '60%',
        marginBottom: 10
      },
      '& $ctn1': {
        margin: '5px 5px 10px 0',
        width: '100%',
        height: 30,
        background: theme.palette.secondary.main,
        display: 'block'
      },
      '& $ctn2': {
        width: '50%',
        marginLeft: 0,
        height: 40,
        border: '2px solid #FFF',
        background: theme.palette.secondary.light,
        display: 'inline-block'
      }
    }
  }
});

export default styles;
