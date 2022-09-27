import create from "zustand";

type StoreProps = {
  count: number;
  setCount: (count: number) => void;
};

const useStore = create<StoreProps>((set) => ({
  count: 0,
  setCount: (count) => set((state) => ({ ...state, count })),
}));

export default useStore;
