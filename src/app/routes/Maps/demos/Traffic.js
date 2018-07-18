import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  TrafficLayer,
} from 'react-google-maps';

const MapWithATrafficLayer = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    {...props}
    defaultZoom={8}
    defaultCenter={{ lat: 41.9, lng: -87.624 }}
  >
    <TrafficLayer autoUpdate />
  </GoogleMap>
));

class Traffic extends React.Component {
  render() {
    return (
      <MapWithATrafficLayer />
    );
  }
}

export default Traffic;
