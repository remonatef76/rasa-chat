import React, { useRef, useEffect, useState } from "react";
import ReactDom from "react-dom";
import Widget from "rasa-webchat";
import ComponentsManager from "./ComponentsManager";
import Icon from "./Body/Icon";
import Header from "./Body/Header";
import "./../../assets/scss/Chat.scss";
import headerIcon from "./../../assets/images/header/header-icon.png";
import { handleMessageTime, addGetLocalstorage } from "./helpers";
// import SimpleBar from 'simplebar';
// import 'simplebar/dist/simplebar.css';
import ReactDOMServer from 'react-dom/server';
import Footer from "./Body/Footer";

const Chat = () => {
  const widget = useRef();

  const [chatContainer, setChatContainer] = useState(null);
  const [chatHead, setChatHead] = useState(null);
  const [chatShowButton, setChatShowButton] = useState(null);
  const [scrollContainer, setScrollContainer] = useState(null);
  const [chatSession, setChatSession] = useState();
  // const [simpleBar, setSimpleBar] = useState();

  const hide = () => {
    if (chatShowButton) {
      chatShowButton.click();
      return true;
    }
    document.querySelector(".rw-launcher").click();
  };

  // eslint-disable-next-line
  const HeaderContent = (
    <Header
      icon={headerIcon}
      hide={hide}
      title={
        <>
          <div>Norton</div>
          <div>customer care</div>
        </>
      }
      subTitle={"We reply immediately"}
    />
  );

  const IconContent = ReactDOMServer.renderToString(
    <Icon icon={"N"} cc={"rw-avatar"}></Icon>
  )

  const reSkinChat = () => {
    if (document.getElementById("customRasaWebChat")) {
      const chat =
        document.getElementById("customRasaWebChat").childNodes[0]
          ?.childNodes[0];
      const head = chat?.childNodes[0]?.childNodes[0];

      const chatSohwbuttonElement = chat?.childNodes[1];

      const messagesContainer = chat?.childNodes[0]?.childNodes[1];

      setChatContainer(chat);
      setChatHead(head);
      setChatShowButton(chatSohwbuttonElement);
      setScrollContainer(messagesContainer);
      setChatSession(window.localStorage.getItem("chat_session"));
    }

    setTimeout(() => {
      reSkinChat();
    }, 100);
  };

  useEffect(() => {
    if (widget.current) {
      reSkinChat();
    }
    // eslint-disable-next-line
  }, [widget]);

  useEffect(() => {
    if (
      chatHead &&
      chatContainer &&
      chatContainer.classList.contains("rw-chat-open") && 
      scrollContainer
    ) {
      ReactDom.render(HeaderContent, chatHead);

      const footerTextarea = chatHead.nextSibling.nextSibling.querySelector(".rw-new-message");
      const btn = chatHead.nextSibling.nextSibling.querySelector(".rw-send");
      btn.disabled = false;

      if(footerTextarea && !footerTextarea.classList.contains("rendered")){
        let footerChild = document.createElement('div');
        ReactDom.render(<Footer />, footerChild);
        footerTextarea.parentNode.prepend(footerChild);
        footerTextarea.remove();
      }

      const images = scrollContainer.querySelectorAll(".rw-with-avatar > img");
      if(typeof images === "object"){
        for(let item of images){
          let child = document.createElement('div');
          child.innerHTML = IconContent;
          child = child.firstChild;
          item.parentNode.prepend(child);
          item.remove();
        }
      }

      // if(!simpleBar){
      //   setSimpleBar(new SimpleBar(scrollContainer));
      // }else{
      //   simpleBar.recalculate();
      // }
    }
  }, [chatHead, HeaderContent, chatContainer, scrollContainer, chatSession]);

  const widgetSubmit = (payload, title) => {
    if (widget.current && widget.current.sendMessage) {
      let params = [payload];
      if (title) {
        params.push(title);
      }
      widget.current.sendMessage(...params);
    }
  };

  return (
    <div id="customRasaWebChat">
      <Widget
        ref={widget}
        initPayload={window.location.href}
        customComponent={(messageData) => (
          <ComponentsManager
            data={messageData}
            widget={widget}
            submit={widgetSubmit}
            addGetLocalstorage={addGetLocalstorage}
          />
        )}
        title={"Norton customer care"}
        subtitle={"We reply immediately"}
        socketUrl={"http://localhost:5005"}
        profileAvatar={headerIcon}
        showMessageDate={handleMessageTime}
        socketPath={"/socket.io/"}
        customData={{ language: "en" }}
      />
    </div>
  );
};

export default Chat;
