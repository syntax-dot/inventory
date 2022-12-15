<template>
  <button :class="$style.root"
          @click="$emit('remove')">
    Удалить предмет
  </button>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
.root {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  margin: 18px 15px;
  box-sizing: border-box;
  height: 39px;
  border-radius: 8px;
  background-color: #FA7272;
  font-size: 1.4rem;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }
}
</style>
