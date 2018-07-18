import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import LocalDining from '@material-ui/icons/LocalDining';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen &&
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <span>
            <LocalDining /> A marked place
          </span>
        </InfoWindow>
      }
    </Marker>
  </GoogleMap>
));

class PopoverMarker extends React.Component {
  render() {
    return (
      <MapWithAMakredInfoWindow
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    );
  }
}

export default PopoverMarker;
