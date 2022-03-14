import React from 'react'

const Download = ({ payload, index, props }) => {
  const { ICONS } = props
  const { download } = ICONS

  return (
    <div
      className={`rasa-download rasa-download-location-${payload?.location}`}
      key={index}
    >
      <img src={download} alt='Download' />
    </div>
  )
}

export default Download
