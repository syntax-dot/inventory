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
  grid-template-rows: repeat(5, 20%);
}

.row {
  display: grid;
  grid-template-columns: repeat(5, 20%);
}
</style>
