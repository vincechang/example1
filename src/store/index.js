import { createStore } from 'zustand/vanilla';
import { useStore as useStoreHook } from 'zustand';

export const store = createStore((set) => ({
  keyword: '',
  setKeyword: (keyword) => set({ keyword }),
  pageSize: 0,
  setPageSize: (pageSize) => set({ pageSize }),
}));

const useStore = (selector) => useStoreHook(store, selector);

export default useStore;
