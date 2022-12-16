<template>
  <div :class="$style.root">
    <button :class="$style.btn"
            @click="$emit('remove')">
      Удалить предмет
    </button>
  </div>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
@import '../../../css/variables.scss';

.root {
  display: block;
  align-self: self-end;
  right: 0;
  left: 0;
  bottom: 0;
  padding-top: 18px;
  border-top: 1px solid $border-color;
  box-sizing: border-box;
}
.btn {
  width: 100%;
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
