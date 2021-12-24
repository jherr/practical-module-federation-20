import create from "zustand";

export const useCount = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set((state) => ({ count: 0 })),
}));
