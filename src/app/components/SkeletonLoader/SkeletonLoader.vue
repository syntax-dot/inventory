<template>
  <div :class="$style.root">
    <div v-for="row in rows"
         :key="row"
         :class="$style.row"/>
  </div>
</template>

<script setup lang="ts">
import { SkeletonLoaderProps } from './SkeletonLoader.props'

defineProps<SkeletonLoaderProps>()
</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: grid;
  grid-auto-flow: row;
  gap: 16px;
  justify-items: center;
  padding: 16px 5px 21px 5px;
  box-sizing: border-box;

  overflow: hidden;
}

.row {
  width: 100%;
  border-radius: 4px;

  @include background-gradient;
  animation: shine-lines $animation-duration infinite linear;

  &:first-child {
    border-radius: 8px;
    height: 30px;
  }

  &:nth-last-child(2) {
    width: 80%;
  }

  &:last-child {
    width: 30%;
  }
}

@keyframes shine-lines {
  0% {
    background-position: 0
  }

  100% {
    background-position: 600px
  }
}
</style>
