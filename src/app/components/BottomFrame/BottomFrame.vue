<template>
  <div :class="$style.root">
    <div :class="$style.field"/>
    <img :class="$style.close_icon"
         src="../../../assets/icons/close.svg"
         alt="Close">
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: grid;
  grid-template-columns: 1fr max-content;
  margin-top: 24px;
  width: 100%;
  height: 70px;
  border: 1px solid $border-color;
  border-radius: 12px;
}

.field {
  border-radius: inherit;
  height: 36px;
  margin: 18px 36px 18px 18px;

  @include background-gradient;
  animation: shine-lines $animation-duration infinite linear;
}

.close_icon {
  cursor: pointer;
  padding: 14px;

  &:hover {
    scale: 1.1;
  }
}
</style>
