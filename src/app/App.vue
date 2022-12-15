<template>
  <div :class="$style.root">
    <InventoryPage/>
  </div>
</template>

<script setup lang="ts">
import InventoryPage from './views/InventoryPage.vue'
</script>

<style module lang="scss">
.root {

}
</style>

<style lang="scss">
@import "../css/variables.scss";

:root {
  font-size: 62.5%;
}

#app,
* {
  margin: 0;
  padding: 0;
}

#app,
body,
html {
  // height: 100%;
  width: 100%;
}

body {
  background-color: $main-bg-color;
}
</style>
