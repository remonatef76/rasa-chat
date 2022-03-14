import React, { useState } from 'react'
import Picker from 'emoji-picker-react'

// const mic = require('/../../../assets/images/footer/mic.png')

const Footer = ({ icons }) => {
  const { mic, logo, smile, attachment } = icons
  const [message, setMessage] = useState('')
  const [emojiPicker, setEmojiPicker] = useState(false)
  const onEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject.emoji)
  }

  const toggleEmojiPicker = () => {
    setEmojiPicker(!emojiPicker)
  }

  return (
    <div className='footer-container'>
      <div className='up'>
        <textarea
          className='rw-new-message rendered'
          placeholder='Type a message'
          name='message'
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <img src={mic} alt='Mic' className='record' />
      </div>

      <div className='down'>
        <div className='emojis-file'>
          <div className='emojis-picker-container'>
            <div className={`picker ${!emojiPicker ? 'hide-picker' : ''}`}>
              <Picker onEmojiClick={onEmojiClick} />
            </div>
            <img src={smile} alt='Emojis' onClick={toggleEmojiPicker} />
          </div>
          <img src={attachment} alt='Attachment' />
        </div>
        <div className='powered'>
          <span>Powered by Pinnaka</span>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Footer
