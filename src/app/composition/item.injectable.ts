import { inject, InjectionKey, provide, ref, Ref, watch } from 'vue'
import { Item } from '../types/Item'

const itemKey: InjectionKey<Ref<Item>> = Symbol('item')

export function provideItem(initialItem: Ref<Item>) {
  const item = ref<Item>({ ...initialItem.value })

  watch(initialItem, value => item.value = value)

  provide(itemKey, item)

  return item
}

export function injectItem() {
  const item = inject(itemKey)

  if (!item)
    throw new Error(`injection key ${itemKey} not found`)

  return item
}
