import { RouteRecordRaw } from 'vue-router'
import InventoryPage from '../views/InventoryPage.vue'

export const routes: RouteRecordRaw[] = [
  { path: '', component: InventoryPage, name: 'inventory' },
]
