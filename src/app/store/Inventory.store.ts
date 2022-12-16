import { Item } from '../types/Item'

export class InventoryStore {
  static readonly INVENTORY_LS_KEY = 'Inventory'

  save(inventory: Item[]) {
    localStorage.setItem(InventoryStore.INVENTORY_LS_KEY, JSON.stringify(inventory))
  }

  load(): Item[] {
    const inventory = localStorage.getItem(InventoryStore.INVENTORY_LS_KEY)
    if (!inventory)
      return []

    return JSON.parse(inventory)
  }
}
