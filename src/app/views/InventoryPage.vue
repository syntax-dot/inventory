<template>
  <div :class="$style.root">
    <InventoryFrame/>
    <InventoryGrid/>
  </div>
</template>

<script lang="ts" setup>
import { InventoryGrid } from '../components/InventoryGrid'
import { InventoryFrame } from '../components/InventoryFrame'
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: 30% 70%;
}
</style>
