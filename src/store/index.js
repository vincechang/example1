import { create } from 'zustand';

const useStore = create((set) => ({
  keyword: '',
  setKeyword: (keyword) => set({ keyword }),
  pageSize: 0,
  setPageSize: (pageSize) => set({ pageSize }),
}));

export default useStore;
