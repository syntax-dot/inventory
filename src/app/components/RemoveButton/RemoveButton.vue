<template>
  <button :class="$style.root">
    Удалить предмет
  </button>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
.root {
  margin-top: 18px;
  height: 39px;
  border-radius: 8px;
  background-color: #FA7272;
  font-size: 1.4rem;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #ff0000ce;
  }
}
</style>
