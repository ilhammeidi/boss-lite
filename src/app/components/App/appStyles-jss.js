import bg from 'ba-images/material_bg.svg';

const appFrame = {
  position: 'relative',
  display: 'flex',
  width: '100%',
  zIndex: 1,
};

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: 0,
    zIndex: 1,
    overflow: 'auto',
  },
  appFrameInner: {
    ...appFrame,
    height: '100%',
  },
  appFrameOuter: {
    ...appFrame,
    minHeight: '100%',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit,
    height: '100%',
    overflow: 'auto',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: theme.spacing.unit * 1.5,
      paddingRight: theme.spacing.unit * 1.5,
    },
  },
  outerContent: {
    background: `url(${bg}) no-repeat ${theme.palette.primary.main} left bottom`,
    width: '100%',
    backgroundSize: 'cover',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '20px 0'
    },
  },
  bgbar: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    position: 'absolute',
    height: 184,
    top: 0,
    left: 0
  },
  mainWrap: {
    position: 'relative',
    marginTop: theme.spacing.unit * 6,
    height: '100%',
    '& > div': {
      paddingBottom: theme.spacing.unit * 4,
      willChange: 'inherit !important' // hack for floating form issue whne expaded
    }
  },
  preloader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    background: 'transparent',
    height: 3,
  },
  materialBg: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    opacity: 0.5
  },
  contentPadding: {
    paddingLeft: 80
  },
  hideApp: {
    display: 'none'
  },
  circularProgress: {
    position: 'absolute',
    top: 'calc(50% - 100px)',
    left: 'calc(50% - 100px)',
  },
  brand: {
    height: 54,
    display: 'flex',
    padding: '10px 10px 5px',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: 20
    },
    '& h3': {
      margin: 0,
      fontSize: 16,
      fontWeight: 500,
      paddingLeft: 10,
      color: theme.palette.common.white,
    }
  }
});

export default styles;
