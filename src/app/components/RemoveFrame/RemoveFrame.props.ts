export interface RemoveFrameProps {
  amount: number
}

export interface RemoveFrameEmits {
  (event: 'approve', value: number): void
  (event: 'cancel'): void
}
