import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';

export default class IconTabs extends React.Component {
  state = {
    value: 0,
    value2: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChange2 = (event, value2) => {
    this.setState({ value2 });
  };

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item md={6} xs={12}>
            <Typography variant="button" gutterBottom>Without Text</Typography>
            <Paper>
              <Tabs
                value={this.state.value2}
                onChange={this.handleChange2}
                fullWidth
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab icon={<PhoneIcon />} />
                <Tab icon={<FavoriteIcon />} />
                <Tab icon={<PersonPinIcon />} />
              </Tabs>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="button" gutterBottom>With Text</Typography>
            <Paper>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth
                indicatorColor="secondary"
                textColor="secondary"
              >
                <Tab icon={<PhoneIcon />} label="RECENTS" />
                <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                <Tab icon={<PersonPinIcon />} label="NEARBY" />
              </Tabs>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
