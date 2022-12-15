<template>
  <div :class="$style.root">
    <input :class="$style.input"
           type="number"
           placeholder="Введите количество">
    <div :class="$style.buttons">
      <button :class="$style.cancel"
              @click="$emit('remove')">
        Отмена
      </button>
      <button :class="$style.approve"
              @click="$emit('remove')">
        Подтвердить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  display: grid;
  grid-template-rows: max-content max-content;
  gap: 20px;
  margin: 6px;
}

.input {
  height: 40px;
  padding: 12px;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid $border-color;
  border-radius: 4px;
  width: 100%;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}

.buttons {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
}

.cancel,
.approve {
  border: none;
  width: 100%;
  height: 33px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: 0.3s ease-in-out;
  font-family: 'Inter', sans-serif;
  font-weight: 400;

  box-shadow: 0px 0px 32px 0px rgba(250, 114, 114, 0.2);
}

.cancel {
  background-color: #fff;
  color: #000;
}

.approve {
  background-color: #FA7272;
  color: #fff;

  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }
}
</style>
