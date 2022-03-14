import React, { useState } from 'react'

const Fun = ({ content, payloadData, index, TEMPLATE_TYPE, props }) => {
  const { ICONS } = props
  const { pdf } = ICONS

  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }

  const data = (
    <div className='article' key={index + TEMPLATE_TYPE + show + 'article'}>
      <div className='img-container'>
        <img
          src={payloadData.img}
          title={payloadData.desc}
          className='img'
          alt='Thumbnail'
        />
        {payloadData.fileType === 'pdf' && (
          <img src={pdf} alt={payloadData.fileType} className='file-type' />
        )}
      </div>
      <div className='desc-container'>
        <span>
          {!show
            ? payloadData.desc.split(' ').slice(0, 17).join(' ')
            : payloadData.desc}{' '}
          <span className='read-more' onClick={toggleShow}>
            {show ? 'Read Less >>' : 'Read More >>'}
          </span>
        </span>
      </div>
    </div>
  )

  content.push(data)
  return content
}

export default Fun
