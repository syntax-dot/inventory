<template>
  <div :class="$style.root">
    <img src="../../../assets/icons/close.svg" alt="Close">
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
.root {
  display: grid;
  position: absolute;
  height: 100%;
  right: 0;
  width: 35%;
  background-color: red;
}
</style>
