<template>
  <div :class="$style.root">
    <div :class="$style.inventory">
      <InventoryFrame/>
      <InventoryGrid/>
    </div>
    <BottomFrame/>
  </div>
</template>

<script lang="ts" setup>
import { InventoryGrid } from '../components/InventoryGrid'
import { InventoryFrame } from '../components/InventoryFrame'
import { BottomFrame } from '../components/BottomFrame'
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
