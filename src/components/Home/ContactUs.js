import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const ContactUSMap = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div  style={{ height: `100%` }} />,
    containerElement: <div  style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <div className="contactus-map">
    <div className="contactus-map-content">
      <h5>تعالى  و <strong>زرنا</strong></h5>
      <p>هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.</p>
      <hr />
      <ul>
        <li>
          <div className="media">
            <i className="fas fa-map-marked-alt"></i>
            <div className="media-body">
              <h5 className="mt-0"><strong>العنوان</strong></h5>
              <span>العروبة، المنتزه،
               قسم مصر الجديدة، محافظة القاهرة‬</span>
              
            </div>
          </div>
        </li>
        <li>
          <div className="media">
          <i className="fas fa-mobile-alt"></i>
            <div className="media-body">
              <h5 className="mt-0"><strong>اتصل بنا</strong></h5>
              <span>العروبة، المنتزه،
               قسم مصر الجديدة، محافظة القاهرة‬</span>
              
            </div>
          </div>
        </li>
        <li>
          <div className="media">
          <i className="far fa-newspaper"></i>
                      <div className="media-body">
              <h5 className="mt-0"><strong>اكتب لنا</strong></h5>
              <span>العروبة، المنتزه،
               قسم مصر الجديدة، محافظة القاهرة‬</span>
              
            </div>
          </div>
        </li>
      </ul>
    </div>
    <GoogleMap className="heelo" defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />

      )}


    </GoogleMap>
  </div>


));

export default ContactUSMap;

