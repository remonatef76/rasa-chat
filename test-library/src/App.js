import React from 'react'
import logo from './logo.svg'
import './App.css'

import Chat from 'rasa-chat-library'
import 'rasa-chat-library/dist/style.css'

function App() {
  return (
    <div className='App'>
      <Chat
        initPayload={window.location.href}
        title={['Norton', 'customer care']}
        subtitle={'We reply immediately'}
        socketUrl={'http://localhost:5005'}
        profileAvatar={logo}
        botAvatar={'N'}
        socketPath={'/socket.io/'}
        customData={{ language: 'en' }}
      />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
