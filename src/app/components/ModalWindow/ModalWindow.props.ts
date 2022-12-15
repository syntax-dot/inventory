export interface ModalWindowProps {
  isOpenModal: boolean
}

export interface ModalWindowEmits {
  (emit: 'close'): void
}
