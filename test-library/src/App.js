import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

import Chat from 'rasa-chat-library'
import 'rasa-chat-library/dist/style.css'

const DEFAULT_TEST_MODE = window.localStorage.getItem('TEST_MODE') || 1
const DEFAULT_SAMPLE_SCHEMA =
  window.localStorage.getItem('sampleSchema') || 'rate'

function App() {
  console.log(DEFAULT_SAMPLE_SCHEMA)
  const [TEST_MODE, setTestMode] = useState(DEFAULT_TEST_MODE)
  const [sampleSchema, setSampleSchema] = useState(DEFAULT_SAMPLE_SCHEMA)

  useEffect(() => {
    window.localStorage.setItem('TEST_MODE', TEST_MODE)
    window.localStorage.setItem('sampleSchema', sampleSchema)
  }, [TEST_MODE, sampleSchema])

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
        TEST_MODE={TEST_MODE}
        sampleSchema={sampleSchema}
        setSampleSchema={setSampleSchema}
        setTestMode={setTestMode}
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
