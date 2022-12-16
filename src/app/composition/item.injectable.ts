import { inject, InjectionKey, provide, ref, Ref, watch } from 'vue'
import { Item } from '../types/Item'

const itemKey: InjectionKey<Ref<Item>> = Symbol('item')

export function provideItem(initialUser: Ref<Item>) {
  const item = ref<Item>({ ...initialUser.value })

  watch(initialUser, value => item.value = value)

  provide(itemKey, item)

  return item
}

export function injectItem() {
  const user = inject(itemKey)

  if (!user)
    throw new Error(`injection key ${itemKey} not found`)

  return user
}
