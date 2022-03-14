export const DEFAULT_STYLES = `    
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --rasa-green: linear-gradient(270deg, #6ddda5 -14.81%, #4abdda 100%);
  --rasa-blue: linear-gradient(270deg, #434fc7 -14.81%, #6fcee0 100%);
  --rasa-yellow: linear-gradient(270.04deg, #fac521 7.51%, #f9a21d 91.69%);
  --rasa-buttons-bg: linear-gradient(0deg, #b4e568 -3.57%, #44aa61 96.3%);
  --rasa-secondary-buttons-bg: linear-gradient(270deg, #4abdda -16.64%, #6ddda5 149.79%);
  --rasa-thirdly-bg: linear-gradient(89.2deg, #44aa61 0.54%, #b4e568 99.31%);
  --rasa-footer-bg: #44aa6147;
  --rasa-black: #3b3b3c;
  --font-family: Prompt;
  --rasa-white: #fff;
  --rasa-lighter-white: #f0f0f0;
}`

export const stylesContainerID = 'rasaChatAppDynamicCSS'

export const generateStyles = () => {
  if (!document.querySelector('#' + stylesContainerID)) {
    const stylesElement = document.createElement('style')
    stylesElement.setAttribute('id', stylesContainerID)
    document.body.appendChild(stylesElement)
    updateStyles(DEFAULT_STYLES)
  }
}

export const updateStyles = (STYLES) => {
  document.querySelector('#' + stylesContainerID).textContent = STYLES
}

export const getStyles = () =>
  document.querySelector('#' + stylesContainerID)?.textContent

export const resetStyles = () => {
  window.localStorage.removeItem(`color-rasa-green`)
  window.localStorage.removeItem(`color-rasa-thirdly-bg`)
  window.localStorage.removeItem(`color-rasa-buttons-bg`)
  updateStyles(DEFAULT_STYLES)
}

export const downloadStyles = () => {
  let pom = document.createElement('a')
  pom.setAttribute(
    'href',
    'data:application/download;charset=utf-8,' + encodeURIComponent(getStyles())
  )
  pom.setAttribute('download', 'rasa-chat-theme.css')

  if (document.createEvent) {
    let event = document.createEvent('MouseEvents')
    event.initEvent('click', true, true)
    pom.dispatchEvent(event)
  } else {
    pom.click()
  }
}

export const StyleSheetBuilder = ({ variable, value }) => {
  if (getStyles()) {
    const STYLES = document
      .querySelector('#' + stylesContainerID)
      .textContent.replace(
        RegExp('\\-\\-' + variable + '\\:' + '.+\\;', 'g'),
        `--${variable}: ${value};`
      )
    updateStyles(STYLES)
  }
}
