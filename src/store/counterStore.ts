import { create } from 'zustand'

interface CounterStore {
  count: number
  isLoading: boolean
  increment: () => void
  decrement: () => void
  reset: () => void
  setLoading: (loading: boolean) => void
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  isLoading: false,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}))
