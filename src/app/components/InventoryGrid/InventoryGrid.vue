<template>
  <div :class="$style.root">
    <div v-for="row in 5"
         :key="row"
         :class="$style.row">
      <div v-for="column in 5"
           :key="column"
           :class="$style.column">
        <InventoryItem/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { InventoryItem } from '../InventoryItem'

</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: grid;
  grid-template-rows: repeat(5, 20%);
  border-radius: 12px;
  background-color: $border-color;
  box-sizing: border-box;
  overflow: hidden;
  gap: 1px;
  border: 1px solid $border-color;
}

.row {
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(5, 20%);
}

.column {
  background-color: $main-color;
}
</style>
