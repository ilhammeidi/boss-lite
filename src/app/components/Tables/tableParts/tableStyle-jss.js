import { lighten } from '@material-ui/core/styles/colorManipulator';
const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  rootTable: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  highlight:
    theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: lighten(theme.palette.secondary.light, 0.85),
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark,
    },
  spacer: {
    flex: '1 1 100%',
  },
  actionsToolbar: {
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
  },
  titleToolbar: {
    flex: '0 0 auto',
  },
  filterBtn: {
    top: -5,
  },
  textField: {
    flexBasis: 200,
    width: 300
  },
  table: {
    minWidth: 900,
  },
  actions: {
    color: theme.palette.text.secondary,
    margin: 10
  },
  toolbar: {
    backgroundColor: theme.palette.grey[800],
  },
  title: {
    flex: '0 0 auto',
    '& h2': {
      color: theme.palette.common.white
    }
  },
  button: {
    margin: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

export default styles;
