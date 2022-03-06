import { UI } from './view.js'
import { CHAT } from './chat.js'
import { messages } from './message.js'
import { MODAL } from './modal.js'
import { API, TOKEN_KEY } from './api.js'
import Cookies from 'js-cookie'

CHAT.renderMessages().then(() => {
  CHAT.scrollToLastMsg()
})

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

if (!Cookies.get(TOKEN_KEY))
MODAL.open(UI.MODALS.AUTH)

UI.MODALS.AUTH.querySelector('.auth__form').addEventListener('submit', e => {
  e.preventDefault()
  const input = UI.MODALS.AUTH.querySelector('.auth__input')
  const email = input.value.trim()
  if (!email) return
  if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    e.target.reset()
    input.placeholder = 'enter correct email'
    return
  }
  try {
    API.makeResponse(API.AUTH_ENDPOINT, 'POST', { email: email }).then(response => {
    if (response.email === email) {
      MODAL.close(UI.MODALS.AUTH)
      MODAL.open(UI.MODALS.CONFIRM)
      return
    }
    e.target.reset()
    input.placeholder = 'please try again'
  })
  } catch (e) {
    alert(e)
  }
})

UI.MODALS.CONFIRM.querySelector('.confirm__form').addEventListener('submit', e => {
  e.preventDefault()
  const input = UI.MODALS.CONFIRM.querySelector('.confirm__input')
  const code = input.value.trim()
  if (!code || code.length < 50) {
    e.target.reset()
    input.placeholder = 'enter correct code from email'
    return
  }
  Cookies.set(TOKEN_KEY, code, { expires: 365 * 10 })
  MODAL.close(UI.MODALS.CONFIRM)
})

UI.MODALS.SETTINGS.querySelector('.settings__form').addEventListener('submit', e => {
  e.preventDefault()
  const input = UI.MODALS.SETTINGS.querySelector('.settings__input-name')
  const name = input.value.trim()
  if (!name || name.length < 3) {
    e.target.reset()
    input.placeholder = 'please enter correct name'
    return
  }
  try {
    API.makeResponse(API.AUTH_ENDPOINT, 'PATCH', {name: name}).then(response => {
      if (response.name === name) {
        alert('change name successful!')
      } else {
        alert('change error, try again')
        return
      }
      MODAL.close(UI.MODALS.SETTINGS)
    })
  } catch(e) {
    alert(e)
  }
})