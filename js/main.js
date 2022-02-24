import { UI } from './view.js'
import { CHAT } from './chat.js'
import { messages } from './message.js'
import { MODAL } from './modal.js'
import { API } from './api.js'

CHAT.scrollToLastMsg()

UI.SEND_FORM.FORM.addEventListener('submit', e => {
  e.preventDefault()
  messages.sendSelfMessage()
  CHAT.scrollToLastMsg()
  e.target.reset()
})

MODAL.addModalCloseListeners()

UI.MENU_BUTTONS.SETTINGS.addEventListener('click', () => {
  MODAL.open(UI.MODALS.SETTINGS)
})

MODAL.open(UI.MODALS.AUTH)

UI.MODALS.AUTH.querySelector('.auth__form').addEventListener('submit', e => {
  e.preventDefault()
  const email = UI.MODALS.AUTH.querySelector('.auth__input').value.trim()
  if (!email) return
  if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    e.target.reset()
    UI.MODALS.AUTH.querySelector('.auth__input').placeholder = 'enter correct email'
    return
  }
  API.makeResponse(API.AUTH_ENDPOINT, 'POST', {}, {email: email}).then(response => {
    if (response.email === email) {
      MODAL.close(UI.MODALS.AUTH)
      MODAL.open(UI.MODALS.CONFIRM)
    }
  })
})