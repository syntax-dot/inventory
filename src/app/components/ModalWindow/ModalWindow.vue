<template>
  <Transition name="modal" appear>
    <div :class="$style.root">
      <img src="../../../assets/icons/close.svg" alt="Close">
    </div>
  </Transition>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: grid;
  position: absolute;
  height: 83%;
  right: 32px;
  top: 32px;
  width: 35%;
  background-color: $main-color;
  border: 1px solid $border-color;
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
