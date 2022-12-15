<template>
  <div :class="$style.root">
    <div :class="$style.grid">
      <div v-for="rowPosition in 5"
           :key="rowPosition"
           :class="$style.row">
        <div v-for="columnPosition in 5"
             :key="columnPosition"
             :class="$style.column"
             @dragover.prevent
             @dragenter.prevent>
          <InventoryItem v-if="items.find(item =>
                           item.position.y === rowPosition
                           &&
                           item.position.x === columnPosition)"
                         ref="item"
                         @click="isOpenModal = !isOpenModal"/>
        </div>
      </div>
    </div>
    <ModalWindow v-if="isOpenModal"
                 ref="modal"/>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Item } from '../../types/Item'
import { InventoryItem } from '../InventoryItem'
import { ModalWindow } from '../ModalWindow'
import { InventoryGridProps } from './InventoryGrid.props'

const props: Item[] = defineProps<InventoryGridProps>()

const modal = ref<HTMLDivElement>()
const item = ref<HTMLDivElement>()

const isOpenModal = ref(false)

onMounted(() => {
  window.addEventListener('click', handleClick)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClick)
})

function handleClick(e: Event) {
  if (e.target instanceof HTMLElement) {
    let element = e.target

    while (element.parentElement !== null) {
      if (element === modal.value || element === item.value)
        return

      element = element.parentElement
    }

    isOpenModal.value = false
  }
}
</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  // display: grid;
  // grid-template-columns: max-content max-content;
}

.grid {
  display: grid;
  grid-template-rows: repeat(5, 20%);
  border-radius: 12px;
  background-color: $border-color;
  box-sizing: border-box;
  overflow: hidden;
  gap: 1px;
  border: 1px solid $border-color;

  height: 100%;
}

.row {
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(5, 20%);
}

.column {
  background-color: $main-color;
}
</style>
