import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import dummy from 'ba-utils/dummyContents';
import imgApi from 'ba-utils/images';
import { GeneralCard, NewsCard, Quote, IdentityCard } from './../../../../components';

const styles = theme => ({
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardMedia: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

class StandardCard extends React.Component {
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        direction="row"
        spacing={16}
      >
        <Grid item md={6}>
          <Typography variant="button" className={classes.divider}>Simple Card</Typography>
          <div>
            <GeneralCard liked={1} shared={20} commented={15}>
              <Typography className={classes.title} color="textSecondary">
                Word of the Day
              </Typography>
              <Typography variant="headline" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography component="p">
                well meaning and kindly.<br />
                {'"a benevolent smile"'}
              </Typography>
            </GeneralCard>
          </div>
          <Typography variant="button" className={classes.divider}>Media</Typography>
          <div>
            <NewsCard
              image={imgApi[8]}
              title="Contemplative Reptile"
            >
              <Typography gutterBottom variant="headline" component="h2">
                Lorem ipsum
              </Typography>
              <Typography component="p">
                Aliquam venenatis magna et odio lobortis maximus. Nullam in tortor ligula. Proin maximus risus nunc
              </Typography>
            </NewsCard>
          </div>
        </Grid>
        <Grid item md={6}>
          <Typography variant="button" className={classes.divider}>Quoted Card</Typography>
          <div>
            <GeneralCard liked={1} shared={20} commented={15}>
              <Quote align="left" content="Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one." footnote="John Lennon" />
            </GeneralCard>
          </div>
          <div>
            <Typography variant="button" className={classes.divider}>Identity Card</Typography>
            <IdentityCard
              title="Contact and Address Card"
              name={dummy.user.name}
              avatar={dummy.user.avatar}
              phone="(+8543201213)"
              address="Town Hall Building no.45 Block C - ABC Street"
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

StandardCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StandardCard);
