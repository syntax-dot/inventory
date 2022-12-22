<template>
  <div :class="$style.root">
    <div :class="$style.inventory">
      <InventoryFrame/>
      <InventoryGrid v-if="items"
                     :items="items"
                     @update="handleUpdate"/>
    </div>
    <BottomFrame/>
  </div>
</template>

<script lang="ts" setup>
import { InventoryGrid } from '../components/InventoryGrid'
import { InventoryFrame } from '../components/InventoryFrame'
import { BottomFrame } from '../components/BottomFrame'
import { ref, watch, onMounted } from 'vue'
import { Item } from '../types/Item'
import { InventoryStore } from '../store/Inventory.store'

const inventoryStore = new InventoryStore()

const items = ref<Item[]>(inventoryStore.load())

function handleUpdate(item: Item) {
  items.value = [...items.value.filter(it => it.id !== item.id), item]
}

watch(items, inventoryStore.save)

onMounted(() => {
  if (!items.value.length) {
    items.value = [
      { id: 1, color: '#7FAA65', amount: 4, position: 1 },
      { id: 2, color: '#AA9765', amount: 2, position: 2 },
      { id: 3, color: '#656CAA', amount: 5, position: 8 },
    ]
  }
})
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-rows: 1fr max-content;
  padding: 32px;
  box-sizing: border-box;
  height: 100%;
  cursor: url(../../assets/cursors/cursor.svg), pointer;
  // max-width: 660px;
  // max-height: 849px;
}

.inventory{
  display: grid;
  grid-template-columns: max-content 1fr;
  // gap: 24px;
}
</style>
