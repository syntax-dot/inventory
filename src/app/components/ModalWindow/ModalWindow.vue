<template>
  <div :class="$style.root">
    <img :class="$style.close" src="../../../assets/icons/close.svg" alt="Close" @click="emit('close')">
    <div :class="$style.item">
      <InventoryItem :item="item" :size="Size.BIG" :is-show-amount="false" />
    </div>

    <SkeletonLoader :rows="6" />

    <TransitionGroup name="actions" appear>
      <RemoveButton v-if="!isOpenRemove" @remove="isOpenRemove = !isOpenRemove" />
      <RemoveFrame v-if="isOpenRemove" :amount="item.amount" @cancel="isOpenRemove = false" @approve="handleRemove" />
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RemoveButton } from '../RemoveButton'
import { RemoveFrame } from '../RemoveFrame'
import { SkeletonLoader } from '../SkeletonLoader'
import { InventoryItem } from '../InventoryItem'
import { Size } from '../InventoryItem/InventoryItem.props'
import type { ModalWindowEmits, ModalWindowProps } from './ModalWindow.props'

defineProps<ModalWindowProps>()

const emit = defineEmits<ModalWindowEmits>()

const isOpenRemove = ref(false)

function handleRemove(removeAmount: number) {
  emit('remove', removeAmount)

  isOpenRemove.value = false
}
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-rows: 1fr 1fr 14%;
  position: absolute;
  border-radius: 0px 12px 12px 0px;
  box-sizing: border-box;
  padding: 18px 15px;
  right: 0;
  top: 0;
  bottom: 0;
  min-width: 250px;
  width: 50%;
  background-color: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid $border-color;
  overflow: hidden;
  z-index: 3;
}

.close {
  position: absolute;
  right: 14px;
  top: 14px;
  z-index: 3;

  &:hover {
    scale: 1.1;
  }
}

.item {
  border-bottom: 1px solid $border-color;
  pointer-events: none;
}

.info {
  display: grid;
  grid-auto-flow: row;
  gap: 40px;
  margin: 16px 0 24px 0;
  overflow: hidden;

  border-bottom: 1px solid $border-color;
}

.info_field {
  height: 29px;
  background-color: #fff;
}
</style>

<style>
.modal-enter-active {
  animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.modal-leave-active {
  animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse;
}

.actions-enter-active {
  animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.actions-leave-active {
  animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse;
}

@keyframes slide-in-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
