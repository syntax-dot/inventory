<template>
  <div :class="$style.root">
    <div v-for="row in 5"
         :key="row"
         :class="$style.row"/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: grid;
  height: 100vh;
  grid-template-rows: repeat(5, 20%);
  border-radius: 12px;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid #4D4D4D;
}

.row {
  display: grid;
  background-color: $main-color;
  grid-template-columns: repeat(5, 1fr);
}
</style>
