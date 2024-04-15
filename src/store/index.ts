import { defineStore } from "pinia"

type AppStoreType = {
  count: number;
};

export const useAppStore = defineStore("appStore", {
  persist: {
    enabled: true, // 开启持久化
    strategies: [
      {
        key: "appStore", // 持久化的key
        storage: window?.localStorage // 持久化的方式，可以选择sessionStorage
      }
    ]
  },
  state: (): AppStoreType => ({
    count: 0
  }),
  actions: {
    addCar(num: number) {
      this.count += num
    }
  }
})