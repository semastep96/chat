import { UI } from './view.js'

export const MODAL = {
  addModalCloseListeners() {
    UI.MODALS.ALL.forEach(modal => {
      modal.addEventListener('click', e => {
        this.close(e.target)
      })
      modal.querySelector('.modal__close').addEventListener('click', () => {
        this.close(modal)
      })
    })
  },
  open(modal) {
    modal.classList.add('active')
  },
  close(modal) {
    modal.classList.remove('active')
  }
}