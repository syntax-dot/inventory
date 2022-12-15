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
.root {
  display: grid;
  grid-template-rows: max-content max-content;
}

.input {
  height: 40px;
}

.buttons {
  display: grid;
  grid-template-columns: max-content max-content;
}

.cancel,
.approve {
  border: none;
  width: 100%;
  height: 20px;
}
</style>
