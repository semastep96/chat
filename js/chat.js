import { UI } from './view.js'
import { messages } from './message.js'
import { API } from './api.js'

export const CHAT = {
  scrollToLastMsg() {
    UI.MESSAGES.CONTAINER.scrollTop = UI.MESSAGES.CONTAINER.scrollHeight
  },
  renderMessages() {
    return API.getMessages().then(allMessages => {
      if (!allMessages) return false
      allMessages.forEach(message => {
        UI.MESSAGES.CONTAINER.append(messages.createMessage(message.user.name, message.text, new Date(message.createdAt), true, true))
      });
      console.log('rendered');
    })
  }
}