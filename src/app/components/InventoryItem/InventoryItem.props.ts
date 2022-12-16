import { Item } from '../../types/Item'

export enum Size {
  SMALL = 48,
  BIG = 115
}

export interface InventoryGridProps {
  item: Item
  isShowAmount: boolean
  size: Size
  isDragging?: boolean
}
