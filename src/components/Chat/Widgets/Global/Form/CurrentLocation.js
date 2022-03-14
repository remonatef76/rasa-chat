import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'

const CurrentLocation = ({
  props,
  index,
  payloadData,
  TEMPLATE_TYPE,
  MESSAGE_ID,
  name,
  CUSTOM_PAYLOAD
}) => {
  const { addGetLocalstorage } = props
  const { ICONS } = props
  const { LocationIcon } = ICONS
  const storageKey = `RASA_WIDGET_${TEMPLATE_TYPE}_${MESSAGE_ID}_${name}`
  const storageKeyPayload = `RASA_WIDGET_${TEMPLATE_TYPE}_${MESSAGE_ID}_PAYLOAD`
  const defaultValue = addGetLocalstorage(storageKey, null, 'GET')
  const [rate, setRate] = useState(defaultValue ? defaultValue : {})
  const [update, setUpdate] = useState(0)
  const elements = payloadData

  const confirm = () => {
    let defaultPayload = addGetLocalstorage(storageKeyPayload, null, 'GET')

    if (!defaultPayload || typeof defaultPayload !== 'object') {
      defaultPayload = {}
    }

    for (let k in rate) {
      defaultPayload[k] = rate[k]
      defaultPayload[k + '_custom'] = CUSTOM_PAYLOAD
    }

    addGetLocalstorage(storageKey, JSON.stringify(rate), 'ADD')
    addGetLocalstorage(storageKeyPayload, JSON.stringify(defaultPayload), 'ADD')

    setUpdate(update + 1)
  }

  const getValue = (i) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        let rates = rate
        rates[i] = {
          lat: latitude,
          lng: longitude
        }
        setRate(rates)
        confirm()
      })
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  return (
    <div className='current-location-container' key={index}>
      {elements.map((item, i) => {
        return (
          <div className='current-location' key={i + update}>
            <button onClick={(e) => getValue(item.name)}>
              <img src={LocationIcon} alt='Location' />{' '}
              <span>{item.placeholder}</span>
            </button>

            {item.showMap && (
              <div className='map'>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyDnOBMxd05U41lL-bjqOFjtK67u3iaqyOg'
                  }}
                  defaultCenter={
                    rate[item.name] !== undefined
                      ? rate[item.name]
                      : item.defaultCoordinates
                  }
                  defaultZoom={item.zoom ? item.zoom : 10}
                ></GoogleMapReact>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CurrentLocation
