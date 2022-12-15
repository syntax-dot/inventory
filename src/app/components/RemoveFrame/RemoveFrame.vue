<template>
  <div :class="$style.root">
    <button :class="$style.root"
            @click="$emit('remove')">
      Удалить предмет
    </button>
  </div>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
.root {

}
</style>
