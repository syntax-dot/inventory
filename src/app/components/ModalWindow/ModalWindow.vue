<template>
  <div v-if="isOpenModal === true"
       :class="$style.root">
    <img :class="$style.close"
         src="../../../assets/icons/close.svg"
         alt="Close"
         @click="emit('close')">
    <div :class="$style.item"/>
    <div :class="$style.info"/>
    <RemoveButton v-if="isOpenModal && !isOpenRemove" @remove="isOpenRemove = !isOpenRemove"/>
    <RemoveFrame v-if="isOpenModal && isOpenRemove"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ModalWindowProps, ModalWindowEmits } from './ModalWindow.props'
import { RemoveButton } from '../RemoveButton'
import { RemoveFrame } from '../RemoveFrame'

const isOpenModal = ref(true)
const isOpenRemove = ref(true)

defineProps<ModalWindowProps>()
const emit = defineEmits<ModalWindowEmits>()
</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: grid;
  grid-template-rows: 1fr 1fr max-content;
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
  border-bottom: 1px solid $border-color;
}
</style>

<style>
.modal-enter-active {
  animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.modal-leave-active {
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
