const styles = theme => ({
  dark: {},
  breadcrumbs: {
    position: 'relative',
    display: 'block',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
    '& p': {
      display: 'block',
      '& span': {
        textTransform: 'capitalize',
        marginLeft: 5,
      },
      '& a': {
        color: theme.palette.common.white,
        textDecoration: 'none',
        margin: '0 5px'
      }
    },
    '&$dark': {
      color: theme.palette.grey[900],
      '& a': {
        color: theme.palette.grey[900]
      }
    }
  }
});

export default styles;
