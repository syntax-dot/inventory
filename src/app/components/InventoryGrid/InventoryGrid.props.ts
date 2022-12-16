import { Item } from '../../types/Item'

export interface InventoryGridProps {
  items: Item[]
}

export interface InventoryGridEmits {
  (emit: 'update', value: Item): void
}
