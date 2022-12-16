<template>
  <div :class="$style.root">
    <div :class="$style.grid">
      <div v-for="index in 25"
           :key="index"
           :class="$style.cell"
           @drop="onDrop($event, index)"
           @dragover.prevent
           @dragenter.prevent>
        <InventoryItem v-if="itemMap.has(index)"
                       :size="Size.SMALL"
                       :isShowAmount="true"
                       :item="itemMap.get(index)!"
                       @click="modalCurrentItem = itemMap.get(index)!"
                       @dragstart="onDragStart($event, index)"/>
      </div>
    </div>
    <Transition name="modal" appear>
      <ModalWindow v-if="modalCurrentItem"
                   :item="modalCurrentItem"
                   @close="modalCurrentItem = null"
                   @remove="handleRemove"/>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, useCssModule } from 'vue'
import { Item } from '../../types/Item'
import { InventoryItem } from '../InventoryItem'
import { Size } from '../InventoryItem/InventoryItem.props'
import { ModalWindow } from '../ModalWindow'
import { InventoryGridProps, InventoryGridEmits } from './InventoryGrid.props'

const props = defineProps<InventoryGridProps>()

const draggingIndex = ref<number | null>(null)

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

function swap(fromIndex: number, toIndex: number) {
  const from = itemMap.value.get(fromIndex)
  const to = itemMap.value.get(toIndex)

  from && emit('update', { ...from, position: toIndex })
  to && emit('update', { ...to, position: fromIndex })
}

const style = useCssModule()
console.log(style)

function onDragStart(e: DragEvent, index: number) {
  if (e.dataTransfer && e.target) {
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.effectAllowed = 'move'

    draggingIndex.value = index
  }
}

function onDrop(e: DragEvent, toIndex: number) {
  if (e.dataTransfer && draggingIndex.value) {
    swap(draggingIndex.value, toIndex)

    draggingIndex.value = null
  }
}
</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  overflow: hidden;
  position: relative;
  min-width: 525px;
  min-height: 500px;
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

.cell {
  background-color: $main-color;
  min-height: 105px;
  min-width: 99px;
}
</style>
