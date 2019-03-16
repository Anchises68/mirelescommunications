import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faPinterestSquare, faInstagram, } from '@fortawesome/free-brands-svg-icons'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



const StoreLocation = withScriptjs(withGoogleMap(() => {
  return (
      <GoogleMap
        defaultZoom={15}
        center={ { lat:  33.838063, lng: -118.361041 } }
      >
        <Marker position={ { lat:  33.838063, lng: -118.361041 } }/>
      </GoogleMap>
    );
  }
))



class StoreMap extends React.Component {
  render() {
    return (

    <div className="container-fluid standard-border">
      <div className="row mt-5 ">
        <div className="col-sm ">
          <h3 className="text-center header-style">Contact</h3>
          <hr className="ml-5 pl-5 pr-5 mr-5"/>
          <h4 className="text-center text-gray pr-5 pl-5">4425 Torrance Blvd, Torrance, CA 90503 - (510) 684-0425</h4>
          <div className="mx-auto" style={{width: 200}}>
            <FontAwesomeIcon icon={faEnvelope} className="fa-2x m-2" />
            <FontAwesomeIcon icon={faFacebook} className="fa-2x m-2"/>
            <FontAwesomeIcon icon={faPinterestSquare} className="fa-2x m-2"/>
            <FontAwesomeIcon icon={faInstagram} className="fa-2x m-2"/>

          </div>

        </div>
      </div>
      <div className="row mb-3" id='contact'>
        <div className="col-md">
          <div className="map-box">
            <div className="map-box-inside">
              <div className="gm-style">
                <div className="google-map">
                  <StoreLocation
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDhq6DDmH0nylqeC3vifVoSyWrUmRFj_7U&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `350px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


/*
const Contact = () => (
  <div className="container-fluid standard-border">
    <div className="row p-5">
      <div className="col-md">
        <div className="map-box">
          <div className="map-box-inside">
            <div className="gm-style">
              <div className="google-map">

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
)
*/
export default StoreMap
