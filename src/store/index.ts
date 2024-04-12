import { defineStore } from "pinia";
import { ref } from "vue";

type AppStoreType = {
    count: number;
};

// 第一种写法
export const useAppStore1 = defineStore({
    id: "appStore",
    state: (): AppStoreType => ({
        count: 0,
    }),
});

// 第二种写法（推荐）
export const useAppStore2 = defineStore("appStore", {
    state: (): AppStoreType => ({
        count: 0,
    }),
    actions: {
        addCar(item: any) {}
    },
    persist: true
});
// 第三种写法
export const useAppStore3 = defineStore("appStore", () => {
    const count = ref(0);

    return {
        count,
    };
},
{
  // 配置持久化
  persist: {
    enabled: true,
    // 调整为兼容多端的API
    storage: {
      setItem(key: string, value: string) {
        uni.setStorageSync(key, value) 
      },
      getItem(key: string) {
        return uni.getStorageSync(key) 
      },
    },
  },
});


// 参考这个文件
// https://blog.csdn.net/weixin_42614447/article/details/134335447