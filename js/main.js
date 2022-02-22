import { UI } from './view.js'
import { CHAT } from './chat.js'
import { messages } from './message.js'

CHAT.scrollToLastMsg()

UI.addSettingsUIListeners()

UI.SEND_FORM.FORM.addEventListener('submit', e => {
  e.preventDefault()
  messages.sendSelfMessage()
  CHAT.scrollToLastMsg()
  e.target.reset()
})