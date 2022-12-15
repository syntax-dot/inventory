<template>
  <div v-if="isOpenModal === true"
       :class="$style.root">
    <img :class="$style.close"
         src="../../../assets/icons/close.svg"
         alt="Close"
         @click="emit('close')">
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ModalWindowProps, ModalWindowEmits } from './ModalWindow.props'

const isOpenModal = ref(true)

defineProps<ModalWindowProps>()
const emit = defineEmits<ModalWindowEmits>()
</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: grid;
  grid-template-rows: 1fr 1fr;
  position: absolute;
  right: 32px; // костыль?
  top: 32px; // костыль?
  bottom: 128px; // костыль?
  width: 35%;
  background-color: $main-color;
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
