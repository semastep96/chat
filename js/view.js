export const UI = {
  MENU_BUTTONS: {
    SETTINGS: document.querySelector('.menu .settings-btn'),
    EXIT: document.querySelector('.exit-btn'),
  },
  SETTINGS: {
    CONTAINER: document.querySelector('.settings'),
    CLOSE_BTN: document.querySelector('.settings__close'),
  },
  MESSAGES: {
    CONTAINER: document.querySelector('.messages .container'),
  },
  SEND_FORM: {
    FORM: document.querySelector('.send'),
    INPUT: document.querySelector('.send__input'),
    BTN: document.querySelector('.send__btn'),
  },
  MSG_TEMPLATE: document.querySelector('.message-tmpl'),
  addSettingsUIListeners() {
    UI.MENU_BUTTONS.SETTINGS.addEventListener('click', () => {
      UI.SETTINGS.CONTAINER.classList.add('active')
    })
    
    UI.SETTINGS.CLOSE_BTN.addEventListener('click', () => {
      UI.SETTINGS.CONTAINER.classList.remove('active')
    })
    
    window.addEventListener('click', e => {
      if (e.target === UI.SETTINGS.CONTAINER) {
        UI.SETTINGS.CONTAINER.classList.remove('active')
      }
    })
  },
}


