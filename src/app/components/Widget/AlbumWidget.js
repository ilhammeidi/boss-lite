import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import imgData from 'ba-utils/imgData';
import PapperBlock from './../PapperBlock/PapperBlock';
import styles from './widget-jss';

class AlbumWidget extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <PapperBlock noMargin title="My Albums (4)" whiteBg desc="">
        <div className={classes.albumRoot}>
          <GridList cellHeight={180} className={classes.gridList}>
            {
              imgData.map((tile, index) => {
                if (index >= 4) {
                  return false;
                }
                return (
                  <GridListTile key={index.toString()}>
                    <img src={tile.img} className={classes.img} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      subtitle={<span>by: {tile.author}</span>}
                      actionIcon={
                        <IconButton className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                );
              })
            }
          </GridList>
        </div>
      </PapperBlock>
    );
  }
}

AlbumWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumWidget);
