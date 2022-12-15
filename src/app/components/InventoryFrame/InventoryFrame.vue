<template>
  <div :class="$style.root">
    <div :class="$style.image"/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 18px 14px 24px 14px;
  margin-right: 24px;
  background-color: $main-color;
  border: 1px solid $border-color;
  border-radius: 12px;
}

.image {
  background-image: url(../../../assets/images/FrameImage.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(6px);
  border-radius: 8px;
}
</style>
