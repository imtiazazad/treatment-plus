import { Component } from 'react';
import { GoogleApiWrapper, Map, } from 'google-maps-react';

class SimpleMap extends Component {
  render() {
    return (
      <div className='mt-16'>
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "60%" }}
          zoom={10}
          initialCenter={
            {
              lat: 23.810331,
              lng: 90.412521
            }
          }
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(SimpleMap)