import { defineStore } from 'pinia'

export const  useUserStore = defineStore('user', {
    state: () => {
        return {
            nickName: ''
        }
    },
    persist: {
        storage: {
            getItem: uni.getStorageSync(),
            setItem: uni.setStorageSync(),
        }
    }
})

// 参考这个文件
// https://blog.csdn.net/weixin_42614447/article/details/134335447