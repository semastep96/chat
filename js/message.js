import { UI } from './view.js'
const selfName = 'Я'

export const messages = {
  createMessage(name, text, date, isCompanion = false, isRead = false) {
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const message = UI.MSG_TEMPLATE.content.cloneNode(true).querySelector('.message');
    message.querySelector('.message__name').textContent = name
    message.querySelector('.message__text').textContent = text
    message.querySelector('.message__time').textContent = hours + ':' + minutes
    isCompanion ? message.classList.add('companion') : message.classList.add('self')
    isRead ? message.classList.add('read') : message.classList.add('sent')
    return message
  },
  sendSelfMessage() {
    const text = UI.SEND_FORM.INPUT.value
    if (!text) return
    UI.MESSAGES.CONTAINER.append(messages.createMessage(selfName, text, new Date(), false, false))
  }
}

