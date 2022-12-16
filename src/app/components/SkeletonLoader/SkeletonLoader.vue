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
  min-height: 10px;
  width: 100%;
  border-radius: 4px;

  @include background-gradient;
  animation: shine-lines $animation-duration infinite linear;

  &:nth-last-child(2) {
    width: 80%;
  }

  &:last-child {
    width: 30%;
  }

  &:first-child {
    border-radius: 8px;
    height: 30px;
    width: 100%;
  }
}
</style>
