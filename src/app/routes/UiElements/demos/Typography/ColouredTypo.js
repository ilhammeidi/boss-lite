import React from 'react';
import Typography from '@material-ui/core/Typography';
import Type from 'ba-components/Typography.scss';

class ColouredTypo extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="headline" className={Type.textInfo} gutterBottom>
          Ut sed eros finibus
        </Typography>
        <Typography variant="body2" className={Type.textSuccess} gutterBottom>
          Nulla eget lobortis lacus. Aliquam venenatis magna et odio lobortis maximus.
        </Typography>
        <Typography variant="headline" className={Type.textWarning} gutterBottom>
          Aliquam nec ex aliquet
        </Typography>
        <Typography variant="title" className={Type.textError} gutterBottom>
          Aenean facilisis vitae purus facilisis semper
        </Typography>
        <Typography className={Type.textGreyDark} gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.
        </Typography>
        <Typography className={Type.textGrey} gutterBottom>
          Vivamus et luctus mauris. Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.
        </Typography>
        <Typography className={Type.textGreyLight} gutterBottom>
          Curabitur egestas consequat lorem, vel fermentum augue porta id.
        </Typography>
      </div>
    );
  }
}

export default ColouredTypo;
