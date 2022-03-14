import React, { useRef, useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import Widget from 'rasa-webchat'
import ComponentsManager from './components/Chat/ComponentsManager'
import Icon from './components/Chat/Body/Icon'
import Header from './components/Chat/Body/Header'
import './assets/scss/Chat.scss'
import {
  handleMessageTime,
  addGetLocalstorage
} from './components/Chat/helpers'
import ReactDOMServer from 'react-dom/server'
import Footer from './components/Chat/Body/Footer'
import mic from 'assets/images/footer/mic.png'
import logo from 'assets/images/footer/logo.png'
import smile from 'assets/images/footer/smile.png'
import attachment from 'assets/images/footer/attachment.png'
import shareIcon from 'assets/images/widgets/share.png'
import download from 'assets/images/widgets/download.png'
import LocationIcon from 'assets/images/widgets/location.png'
import arrowDown from 'assets/images/widgets/arrow-down-white.png'
import play from 'assets/images/widgets/play.png'
import pdf from 'assets/images/widgets/pdf.png'

const ICONS = {
  mic,
  logo,
  smile,
  attachment,
  shareIcon,
  download,
  LocationIcon,
  arrowDown,
  play,
  pdf
}

const Chat = ({
  initPayload,
  title,
  subtitle,
  profileAvatar,
  socketPath,
  socketUrl,
  customData,
  botAvatar,
  TEST_MODE,
  sampleSchema
}) => {
  const widget = useRef()

  const [chatContainer, setChatContainer] = useState(null)
  const [chatHead, setChatHead] = useState(null)
  const [chatShowButton, setChatShowButton] = useState(null)
  const [scrollContainer, setScrollContainer] = useState(null)
  const [chatSession, setChatSession] = useState()

  const hide = () => {
    if (chatShowButton) {
      chatShowButton.click()
      return true
    }
    document.querySelector('.rw-launcher').click()
  }

  // eslint-disable-next-line
  const HeaderContent = (
    <Header
      icon={profileAvatar}
      hide={hide}
      title={['Norton', 'customer care']}
      subTitle={'We reply immediately'}
    />
  )

  const IconContent = ReactDOMServer.renderToString(
    <Icon icon={botAvatar} cc={'rw-avatar'}></Icon>
  )

  const reSkinChat = () => {
    if (document.getElementById('customRasaWebChat')) {
      const chat =
        document.getElementById('customRasaWebChat').childNodes[0]
          ?.childNodes[0]
      const head = chat?.childNodes[0]?.childNodes[0]

      const chatSohwbuttonElement = chat?.childNodes[1]

      const messagesContainer = chat?.childNodes[0]?.childNodes[1]

      setChatContainer(chat)
      setChatHead(head)
      setChatShowButton(chatSohwbuttonElement)
      setScrollContainer(messagesContainer)
      setChatSession(window.localStorage.getItem('chat_session'))
    }

    setTimeout(() => {
      reSkinChat()
    }, 100)
  }

  useEffect(() => {
    if (widget.current) {
      reSkinChat()
    }
    // eslint-disable-next-line
  }, [widget])

  useEffect(() => {
    if (
      chatHead &&
      chatContainer &&
      chatContainer.classList.contains('rw-chat-open') &&
      scrollContainer
    ) {
      ReactDom.render(HeaderContent, chatHead)

      const footerTextarea =
        chatHead.nextSibling.nextSibling.querySelector('.rw-new-message')
      const btn = chatHead.nextSibling.nextSibling.querySelector('.rw-send')
      btn.disabled = false

      if (footerTextarea && !footerTextarea.classList.contains('rendered')) {
        let footerChild = document.createElement('div')
        ReactDom.render(<Footer icons={ICONS} />, footerChild)
        footerTextarea.parentNode.prepend(footerChild)
        footerTextarea.remove()
      }

      const images = scrollContainer.querySelectorAll('.rw-with-avatar > img')
      if (typeof images === 'object') {
        for (let item of images) {
          let child = document.createElement('div')
          child.innerHTML = IconContent
          child = child.firstChild
          item.parentNode.prepend(child)
          item.remove()
        }
      }
    }
  }, [chatHead, HeaderContent, chatContainer, scrollContainer, chatSession])

  const widgetSubmit = (payload, title) => {
    if (widget.current && widget.current.sendMessage) {
      let params = [payload]
      if (title) {
        params.push(title)
      }
      widget.current.sendMessage(...params)
    }
  }

  return (
    <div id='customRasaWebChat'>
      <Widget
        ref={widget}
        initPayload={initPayload}
        customComponent={(messageData) => (
          <ComponentsManager
            data={messageData}
            TEST_MODE={TEST_MODE}
            widget={widget}
            submit={widgetSubmit}
            addGetLocalstorage={addGetLocalstorage}
            sampleSchema={sampleSchema}
            ICONS={ICONS}
          />
        )}
        title={title}
        subtitle={subtitle}
        socketUrl={socketUrl}
        profileAvatar={profileAvatar}
        showMessageDate={handleMessageTime}
        socketPath={socketPath}
        customData={customData}
      />
    </div>
  )
}

export default Chat
