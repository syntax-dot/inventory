<template>
  <div :class="$style.root">
    <div :class="$style.inventory">
      <InventoryFrame/>
      <InventoryGrid v-if="items"
                     :items="items"/>
    </div>
    <BottomFrame/>
  </div>
</template>

<script lang="ts" setup>
import { InventoryGrid } from '../components/InventoryGrid'
import { InventoryFrame } from '../components/InventoryFrame'
import { BottomFrame } from '../components/BottomFrame'
import { ref } from 'vue'
import { Item } from '../types/Item'

const items = ref<Item[]>([
  { id: 1, color: '#7FAA65', position: { x: 1, y: 1 } },
  { id: 2, color: '#AA9765', position: { x: 2, y: 1 } },
  { id: 3, color: '#656CAA', position: { x: 3, y: 1 } },
])
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-rows: 1fr max-content;
  padding: 32px;
  box-sizing: border-box;
  height: 100%;
}

.inventory{
  display: grid;
  grid-template-columns: 30% 70%;
  // gap: 24px;
}
</style>
