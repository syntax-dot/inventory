<template>
  <div :class="$style.root">
    <div :class="$style.grid">
      <div v-for="index in 25"
           :id="'' + index"
           :key="index"
           :class="$style.item"
           @drop="onDrop($event, index)"
           @dragover.prevent
           @dragenter.prevent>
        <InventoryItem v-if="itemMap.has(index)"
                       :item="itemMap.get(index)!"
                       @click="isOpenModal = true"
                       @dragstart="onDragStart($event, itemMap.get(index)!)"/>
      </div>
    </div>
    <transition name="modal" appear>
      <ModalWindow v-if="isOpenModal"
                   :isOpenModal="isOpenModal"
                   @close="isOpenModal = false"/>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Item } from '../../types/Item'
import { InventoryItem } from '../InventoryItem'
import { ModalWindow } from '../ModalWindow'
import { InventoryGridProps } from './InventoryGrid.props'

const props = defineProps<InventoryGridProps>()

const isOpenModal = ref(false)

const itemMap = computed(() => {
  const res = new Map<number, Item>()

  props.items.forEach(item => {
    res.set(item.position, item)
  })

  return res
})

// onMounted(() => {
//   window.addEventListener('click', handleClick)
// })

// onUnmounted(() => {
//   window.removeEventListener('click', handleClick)
// })

// function handleClick(e: Event) {
//   if (e.target instanceof HTMLElement) {
//     let element = e.target
//     console.log(modal)

//     while (element.parentElement !== null) {
//       if (element === modal.value)
//         return

//       element = element.parentElement
//     }

//     isOpenModal.value = false
//   }
// }

function swap(fromIndex: number, toIndex: number) {
  const items = [...props.items]

  items.find(item => item)
}

function onDragStart(e: DragEvent, item: Item) {
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('fromIndex', item.position.toString())
  }
}

function onDrop(e: DragEvent, toIndex: number) {
  if (e.dataTransfer) {
    const fromIndex = parseInt(e.dataTransfer.getData('fromIndex'))
  }
}
</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  overflow: hidden;
  position: relative;
}

.grid {
  display: grid;
  grid-template-rows: repeat(5, 20%);
  grid-template-columns: repeat(5, 20%);
  border-radius: 12px;
  background-color: $border-color;
  box-sizing: border-box;
  overflow: hidden;
  gap: 1px;
  border: 1px solid $border-color;
  height: 100%;
}

.item {
  background-color: $main-color;
}
</style>
