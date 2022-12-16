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
                       ref="item"
                       :isShowAmount="true"
                       :item="itemMap.get(index)!"
                       @click="modalCurrentItem = itemMap.get(index)!"
                       @dragstart="onDragStart($event, itemMap.get(index)!)"/>
      </div>
    </div>
    <transition name="modal" appear>
      <ModalWindow v-if="modalCurrentItem"
                   :item="modalCurrentItem"
                   @close="modalCurrentItem = null"
                   @remove="handleRemove"/>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { emit } from 'process'
import { ref, computed } from 'vue'
import { Item } from '../../types/Item'
import { InventoryItem } from '../InventoryItem'
import { ModalWindow } from '../ModalWindow'
import { InventoryGridProps, InventoryGridEmits } from './InventoryGrid.props'

const props = defineProps<InventoryGridProps>()

const item = ref()

const emit = defineEmits<InventoryGridEmits>()

const modalCurrentItem = ref<Item | null>(null)

const itemMap = computed(() => {
  const res = new Map<number, Item>()

  props.items.forEach(item => {
    res.set(item.position, item)
  })

  return res
})

function handleRemove(removeAmount: number) {
  if (!modalCurrentItem.value)
    return

  emit('update', {
    ...modalCurrentItem.value,
    amount: modalCurrentItem.value.amount - removeAmount,
  })
}

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
  const from = itemMap.value.get(fromIndex)
  const to = itemMap.value.get(toIndex)

  from && emit('update', { ...from, position: toIndex })
  to && emit('update', { ...to, position: fromIndex })
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
    swap(fromIndex, toIndex)
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
