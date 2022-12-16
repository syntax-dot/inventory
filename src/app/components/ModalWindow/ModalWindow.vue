<template>
  <div v-if="isOpenModal === true"
       :class="$style.root">
    <img :class="$style.close"
         src="../../../assets/icons/close.svg"
         alt="Close"
         @click="emit('close')">
    <div :class="$style.item"/>

    <SkeletonLoader :rows="6"/>

    <TransitionGroup name="actions" appear>
      <RemoveButton v-if="isOpenModal && !isOpenRemove" @remove="isOpenRemove = !isOpenRemove"/>
      <RemoveFrame v-if="isOpenModal && isOpenRemove" @cancel="isOpenRemove = false"/>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ModalWindowProps, ModalWindowEmits } from './ModalWindow.props'
import { RemoveButton } from '../RemoveButton'
import { RemoveFrame } from '../RemoveFrame'
import { SkeletonLoader } from '../SkeletonLoader'

// const isOpenModal = ref(false)
const isOpenRemove = ref(false)

defineProps<ModalWindowProps>()
const emit = defineEmits<ModalWindowEmits>()
</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: grid;
  grid-template-rows: 220px 208px max-content;
  position: absolute;
  box-sizing: border-box;
  padding: 18px 15px;
  right: 32px; // костыль?
  top: 32px; // костыль?
  bottom: 128px; // костыль?
  width: 33%;
  background-color: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid $border-color;
}

.close {
  position: absolute;
  right: 14px;
  top: 14px;

  &:hover {
    scale: 1.1;
  }
}

.item {
  border-bottom: 1px solid $border-color;
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
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
</style>
