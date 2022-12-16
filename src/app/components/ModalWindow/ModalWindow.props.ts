import { Item } from '../../types/Item'
export interface ModalWindowProps {
  isOpenModal: boolean
  item?: Item // Костыль
}

export interface ModalWindowEmits {
  (emit: 'close'): void
}
