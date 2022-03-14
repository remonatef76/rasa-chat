import React from 'react'

const Share = ({ payload, index, props }) => {
  const { ICONS } = props
  const { shareIcon } = ICONS
  return (
    <div
      className={`rasa-share rasa-share-location-${payload?.location}`}
      key={index}
    >
      <img src={shareIcon} alt='Share' />
    </div>
  )
}

export default Share
