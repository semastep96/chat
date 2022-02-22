import { UI } from './view.js'

export const CHAT = {
  scrollToLastMsg() {
    UI.MESSAGES.CONTAINER.scrollTop = UI.MESSAGES.CONTAINER.scrollHeight
  },
}