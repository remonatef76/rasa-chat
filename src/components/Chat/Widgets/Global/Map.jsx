import React from "react";
import GoogleMapReact from "google-map-react";
import Share from "./Share";

const Map = (props) => {
  const { data } = props;
  const payload = data.attachment.payload;
  const { elements } = payload;

  return elements.map((element, i) => {
    return (
      <div
        key={i}
        className={`rasa-map-widget rasa-custom-chat-box rasa-${element.element_style}`}
      >
        <div className="map-container">
          <div className="map">
            <div className="share-container">
              <Share></Share>
            </div>
            <div className="google-map-container">
              <GoogleMapReact
                defaultCenter={element.map}
                defaultZoom={element.map.zoom}
                bootstrapURLKeys={{
                  key: "AIzaSyDnOBMxd05U41lL-bjqOFjtK67u3iaqyOg",
                }}
              ></GoogleMapReact>
            </div>
          </div>
          <div className="place-container">
            <div className="place">
              <img src={element.place.image} alt={element.place.title} />
              <div className="content">
                <div className="place-title">{element.place.title}</div>
                <div className="place-subtitle">{element.place.title}</div>
                <div className="sep"></div>
                <div className="address-title">Address</div>
                <div className="address">{element.place.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Map;
