import React from 'react';
import Typography from '@material-ui/core/Typography';

class Heading extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="display4" gutterBottom>
          Disp 4
        </Typography>
        <Typography variant="display3" gutterBottom>
          Display 3
        </Typography>
        <Typography variant="display2" gutterBottom>
          Display 2
        </Typography>
        <Typography variant="display1" gutterBottom>
          Display 1
        </Typography>
        <Typography variant="headline" gutterBottom>
          Headline
        </Typography>
        <Typography variant="title" gutterBottom>
          Title
        </Typography>
        <Typography variant="subheading" gutterBottom>
          Subheading
        </Typography>
        <Typography gutterBottom noWrap>
          {`
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          `}
        </Typography>
      </div>
    );
  }
}

export default Heading;
