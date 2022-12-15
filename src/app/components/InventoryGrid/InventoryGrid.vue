<template>
  <div :class="$style.root">
    <div v-for="row in 5"
         :key="row"
         :class="$style.row">
      <div v-for="column in 5"
           :key="column"
           :class="$style.column"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: grid;
  grid-template-rows: repeat(5, 20%);
  border-radius: 12px;
  background-color: #4D4D4D;
  box-sizing: border-box;
  overflow: hidden;
  gap: 1px;
  border: 1px solid #4D4D4D;
}

.row {
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(5, 1fr);
}

.column {
  background-color: $main-color;
}
</style>
