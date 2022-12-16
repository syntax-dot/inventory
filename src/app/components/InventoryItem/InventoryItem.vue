<template>
  <div :class="$style.root"
       draggable="true">
    <div :style="{ '--color': item.color }"
         :class="$style.item"/>
    <div :style="{ '--color': item.color + '5a' }"
         :class="[$style.item, $style.item_blur]"/>

    <div v-if="isShowAmount"
         :class="$style.amount">
      {{ item.amount }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { InventoryGridProps } from './InventoryItem.props'

const props = defineProps<InventoryGridProps>()
</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    cursor: url(../../../assets/cursors/hand.svg), pointer;
  }

  &:active {
    // border: 1px solid $border-color;
    cursor: url(../../../assets/cursors/hand-grab.svg), pointer;
  }
}

.item {
  position: absolute;
  height: 48px;
  width: 48px;
  background-color: var(--color);
  z-index: 1;

  &_blur {
    position: relative;
    transform: translate(6px, -6px);
    right: 0;
    backdrop-filter: blur(6px);

    z-index: 2;
  }

}

.amount {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 16px;
  width: 16px;
  padding: 2px;
  box-sizing: border-box;
  text-align: center;
  color: $text-color-light;
  border: 1px solid $border-color;
  border-radius: 4px 0px 0px 0px;
}
</style>
