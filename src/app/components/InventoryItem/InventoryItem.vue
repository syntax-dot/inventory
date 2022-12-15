<template>
  <div :class="$style.root">
    <div :class="$style.item"/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    cursor: url(../../../assets/cursors/cursor.svg), pointer;
  }
}

.item {
  height: 48px;
  width: 48px;
  // height: 80%;
  // width: 80%;
  background-color: #7FAA65;
}
</style>
