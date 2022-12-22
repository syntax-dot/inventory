<template>
  <div :class="$style.root">
    <div :class="$style.image">
      <div :class="$style.blur"/>
    </div>
    <SkeletonLoader :rows="7"/>
  </div>
</template>

<script lang="ts" setup>
import { SkeletonLoader } from '../SkeletonLoader'

</script>

<style module lang="scss">
.root {
  display: grid;
  box-sizing: border-box;
  grid-template-rows: 1fr 1fr;
  gap: 4px;
  min-width: 236px;
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
  border-radius: 8px;
}

.blur {
  height: 100%;
  width: 100%;
  border-radius: inherit;
  backdrop-filter: blur(6px);
  background: transparent;
}
</style>
