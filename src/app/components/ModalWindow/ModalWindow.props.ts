import { Item } from '../../types/Item'
export interface ModalWindowProps {
  item: Item
}

export interface ModalWindowEmits {
  (emit: 'close'): void
  (emit: 'remove', value: number): void
}
