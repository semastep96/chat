import { UI } from './view.js'

export const messages = {
  createMessage(name, text, date, isCompanion = false, isRead = false) {
    const hours = date.getHours()
    let minutes = date.getMinutes().toString()
    if (minutes.length < 2) minutes = "0" + minutes

    const message = UI.MSG_TEMPLATE.content.cloneNode(true).querySelector('.message');
    message.querySelector('.message__name').textContent = name
    message.querySelector('.message__text').textContent = text
    message.querySelector('.message__time').textContent = hours + ':' + minutes
    isCompanion ? message.classList.add('companion') : message.classList.add('self')
    isRead ? message.classList.add('read') : message.classList.add('sent')
    return message
  }
}

