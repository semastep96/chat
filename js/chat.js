import { UI } from './view.js'
import { messages } from './message.js'
import { API } from './api.js'
import Cookies from 'js-cookie'
import { EMAIL_KEY } from './main.js'

export const CHAT = {
  scrollToLastMsg() {
    UI.MESSAGES.CONTAINER.scrollTop = UI.MESSAGES.CONTAINER.scrollHeight
  },
  async renderMessages() {
    const allMessages = await API.getMessages()
    if (!allMessages)
      return false
    allMessages.forEach(message => {
      this.renderMessage(message)
    })
  },
  renderMessage(message) {
    isCompanion = !(message.user.email === Cookies.get(EMAIL_KEY))
    UI.MESSAGES.CONTAINER.append(messages.createMessage(message.user.name, message.text, new Date(message.createdAt), isCompanion, true))
  }
}

